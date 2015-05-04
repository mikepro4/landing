'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var DocumentTitle = require('react-document-title');
var classnames = require('classnames');
var Link = Router.Link;

var Header = require('../components/Header.jsx');
var Icons = require('../components/Icons.jsx');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var MobileCheckMixin = require('../mixins/MobileCheck.jsx');
var Validators = require('../mixins/Validators.jsx');

if(process.browser) {
  var key = require('keymaster');
}

var DemoRequest = React.createClass({

  mixins: [ HomePageRouterMixin, MobileCheckMixin, Validators ],

  contextTypes: {
    router: React.PropTypes.func
  },

  goToHome: function() {
    this.selectHomePage(this.props.user)
  },

  getInitialState: function() {
    var email = this.context.router.getCurrentQuery().email;
    return {
      loading: false,
      loaded: false,
      name: null,
      email: email ? email : null,
      message: null,
      agreedToSubscribe: true,
      nameValid: true,
      emailValid: true,
      formInvalid: false
    }
  },

  proceedToNextScreen: function () {
    if(this.state.loaded) {
      this.goToHome();
    }
  },

  componentDidMount: function() {
    key('enter, esc', this.proceedToNextScreen);

    if(this.isMounted() && !this.checkMobile()) {
      this.refs.name.getDOMNode().focus();       
    }

    $(".page-demo-request .js-velocity")
      .velocity("transition.slideUpIn", { 
        stagger: 50
      })
  },

  componentWillUnmount: function() {
    key.unbind('enter, esc');
  },

  submitForm: function (event) {
    event.preventDefault();
    if(this.isNotEmpty(this.state.name) && this.validateEmail(this.state.email)) {
      this.setLoadingState();

      var dataForCompstakEmail = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        market: this.props.user.market,
        agreedToSubscribe: this.state.agreedToSubscribe ? "yes" : "no",
        position: this.props.user.jobTitle
      }

      var dataForUserEmail = {
        name: this.state.name,
        email: this.state.email
      }

      var dataForHubspot = {
        firstName: this.state.name.split(' ').slice(0, -1).join(' '),
        lastName: this.state.name.split(' ').slice(-1).join(' '),
        email: this.state.email,
        message: this.state.message,
        agreedToSubscribe: this.state.agreedToSubscribe,
        position: this.props.user.jobTitle,
        market: this.props.user.market,
      }

      this.sendCompstakEmail(dataForCompstakEmail)
        .done(function() {

          this.sendUserEmail(dataForUserEmail)
            .done(function() {
              
              this.setSuccessState();

              this.sendHubspotEvent(dataForHubspot)
                .done(function() {
                  console.log('hubspot event sent');
                  this.setSuccessState();
                }.bind(this))
              
            }.bind(this))
          
        }.bind(this))

    } else {
      this.setState({
        formInvalid: true
      })

      _.delay(function () {
        this.setState({
          formInvalid: false
        })
      }.bind(this), 2000);
    }
  },

  setLoadingState: function() {
    // set loading state with a throbber
    this.setState({
      loading: true,
      loaded: false
    })
    $(':focus').blur();
  },

  setSuccessState: function() {
    this.setState({
      loading: false,
      loaded: true
    })
  },

  handleNameInput: function (event) {
    this.setState({
      name: event.target.value,
      nameValid: this.isNotEmpty(event.target.value)
    })
  },

  handleEmailInput: function (event) {
    this.setState({
      email: event.target.value,
      emailValid: this.validateEmail(event.target.value)
    })
  },

  handleMessageInput: function (event) {
    this.setState({
      message: event.target.value
    })
  },

  handleSubscribeInput: function (event) {
    this.setState({
      agreedToSubscribe: event.target.checked
    })
  },

  sendCompstakEmail: function (data) {
    return $.ajax({
      url: '/nodeApi/compstakEmail',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(data) {
        console.log('email to compstak sent')
      },
      error: function(xhr, status, err) {
        console.error("email to compstak failed to be sent");
      }
    })
  },

  sendUserEmail: function (data) {
    return $.ajax({
      url: '/nodeApi/userEmail',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(data) {
        console.log('email to user sent')
      },
      error: function(xhr, status, err) {
        console.error("email to user failed to be sent");
      }
    })
  },

  sendHubspotEvent: function (data) {
    return $.ajax({
      url: 'http://track.hubspot.com/v1/event?_n=000000260381&_a=460566&firstname=' + data.firstName + '&lastname=' + data.lastName + '&message=' + data.message + '&email=' + data.email + '&jobtitle=' + data.jobTitle + '&market__c=' + data.market + '&subscriber='+ data.agreedToSubscribe + '',
      type: 'POST',
      success: function(data) {
        console.log('hubspot event')
      },
      error: function(xhr, status, err) {
        console.error("hubspot event didn't sync");
      }
    })
  },

  render: function () {
    return (
      <DocumentTitle title="CompStak – Demo Request for Enterprise – Commercial Lease Comps On Demand for Landlords, Lenders and Investors">
      <div className={classnames({
          'page-demo-request':   true,
          'dark-blue':           true,
          'loading':             this.state.loading,
          'loaded':              this.state.loaded
        })} onKeyDown={this.onKeyboardShortcut}>

          <Header 
            {...this.props}
            login={false}
            menu={false}
            haveAccount={true}
            mode="dark"
            context="enterprise"
          />
          <div className="container">
            <h1 className="js-velocity h2">Schedule a Demo</h1>
            <h4 className="js-velocity mid-grey">Please fill out your information and we will contact you to schedule your demonstation.</h4>
            <p className="js-velocity"><Link className="blue" to="exchange">Are you a Broker, Appraiser or Researcher?</Link></p>
            <form className={classnames({
              'demo-request':   true,
              'form-invalid':   this.state.formInvalid
            })} onSubmit={this.submitForm}>
              <div className={classnames({
                'js-velocity':    true,
                'input-wrap':     true,
                'valid-input':    this.isNotEmpty(this.state.name) && this.state.nameValid,
                'invalid-input':  !this.state.nameValid
              })}>
                <label htmlFor="name"> Name </label>
                <input
                  id="name" 
                  type="text" 
                  ref="name" 
                  value={this.state.name} 
                  onChange={this.handleNameInput} 
                  placeholder="Type your full name"
                />
              </div>
              <div className={classnames({
                'js-velocity':    true,
                'input-wrap':     true,
                'valid-input':    this.isNotEmpty(this.state.email) && this.state.emailValid,
                'invalid-input':  !this.state.emailValid
              })}>
                <label htmlFor="email"> Email </label>
                <input 
                  id="email"
                  type="text" 
                  ref="email" 
                  value={this.state.email} 
                  onChange={this.handleEmailInput} 
                  placeholder="Type your email address"
                /> 
              </div>
              <div className="js-velocity input-wrap">
                <label htmlFor="message"> Business </label>
                <textarea 
                  id="message"
                  ref="message" 
                  value={this.state.message}  
                  onChange={this.handleMessageInput} 
                  rows="3"
                  cols="50"
                  placeholder="How does your business use lease comps?"
                />
              </div>
              <div className="js-velocity input-wrap">
                <input 
                  type="checkbox" 
                  id="agreedToSubscribe" 
                  ref="agreedToSubscribe" 
                  className="checkbox" 
                  defaultChecked={this.state.agreedToSubscribe} 
                  onChange={this.handleSubscribeInput}  
                />
                <label htmlFor="agreedToSubscribe"> <span>Subscribe to the CompStak Newsletter</span> </label>
              </div>
              <button className="js-velocity button">
                <span className="demo-request-submit-label">Schedule a Demo</span>
                <span className="demo-request-submit-error">Fill In Name And Email</span>
              </button>
            </form>
            <div className="container contact">
              <h6 className="js-velocity">Contact us to learn more</h6>

              <div className="js-velocity">1.646.520.3261</div>
              <a className="js-velocity" href="mailto:enterprise@compstak.com">Enterprise@CompStak.com</a>
            </div>

            <div className="success-alert">
              <div className="loader">
                <div className="spinner"></div>
                <div className="check"><Icons type="tick" /></div>
              </div>
              <div className="message">
                <p className="h1">Thank You!</p>
                <p className="mid-grey">We will contact you shortly.</p>
                <a onClick={this.goToHome} className="button">OK</a>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = DemoRequest;