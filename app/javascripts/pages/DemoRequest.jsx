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
    var emailQuery = this.context.router.getCurrentQuery().email;
    return {
      businessTypes: ['Owner/Operator', 'Institutional Owner', 'Lender', 'Fund', 'Investor', 'Advisor', 'Other'],
      loading: false,
      loaded: false,
      firstName: null,
      lastName: null,
      email: emailQuery ? emailQuery : null,
      business: null,
      agreedToSubscribe: true,
      firstNameValid: true,
      lastNameValid: true,
      emailValid: true,
      businessValid: true,
      formInvalid: false
    }
  },

  proceedToNextScreen: function () {
    if(this.state.loaded) this.goToHome()
  },

  componentDidMount: function() {
    key('enter, esc', this.proceedToNextScreen);

    if(this.isMounted() && !this.checkMobile()) {
      this.refs.firstName.getDOMNode().focus();       
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
    if(this.isNotEmpty(this.state.firstName) 
      && this.isNotEmpty(this.state.lastName)
      && this.isNotEmpty(this.state.business) 
      && this.validateEmail(this.state.email)
    ) {
      this.setLoadingState();

      var dataForCompstakEmail = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        business: this.state.business,
        agreedToSubscribe: this.state.agreedToSubscribe ? "yes" : "no"
      }

      var dataForUserEmail = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      }

      this.sendCompstakEmail(dataForCompstakEmail)
        .done(function() {

          this.sendUserEmail(dataForUserEmail)
            .done(function() {
              
              this.setSuccessState();

              this.sendHubspotEvent(dataForCompstakEmail)
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

  handleFirstNameInput: function(event) {
    this.setState({
      firstName: event.target.value,
      firstNameValid: this.isNotEmpty(event.target.value)
    })
  },

  handleLastNameInput: function(event) {
    this.setState({
      lastName: event.target.value,
      lastNameValid: this.isNotEmpty(event.target.value)
    })
  },

  handleEmailInput: function(event) {
    this.setState({
      email: event.target.value,
      emailValid: this.validateEmail(event.target.value)
    })
  },

  handleSubscribeInput: function(event) {
    this.setState({
      agreedToSubscribe: event.target.checked
    })
  },

  handleBusinessInput: function(event) {
    this.setState({
      business: event.target.value,
      businessValid: this.isNotEmpty(event.target.value)
    }, function() {
      console.log(this.state)
    }.bind(this))
  },

  sendCompstakEmail: function(data) {
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

  sendUserEmail: function(data) {
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

  sendHubspotEvent: function(data) {
    var hubspotString = 'firstname=' + data.firstName 
      + '&lastname=' + data.lastName 
      + '&email=' + data.email 
      + '&jobtitle=' + data.business 
      + '&subscriber=' + data.agreedToSubscribe 
      + '&requested_demo=true';

    return $.ajax({
      url: 'http://track.hubspot.com/v1/event?_n=000000260381&_a=460566&' + hubspotString,
      type: 'POST',
      success: function(data) {
        console.log('hubspot event synced')
      },
      error: function(xhr, status, err) {
        console.error("hubspot event didn't sync");
      }
    })
  },

  render: function() {
    var businessNodes = this.state.businessTypes.map(function (business, i) {
      return (
        <option value={business}> {business} </option>
      );
    }.bind(this));

    return (
      <DocumentTitle title="CompStak – Demo Request for Enterprise – Commercial Lease Comps On Demand for Landlords, Lenders and Investors">
      <div className={classnames({
        'page-demo-request':  true,
        'dark-blue-bg':       true,
        'loading':            this.state.loading,
        'loaded':             this.state.loaded
      })}>

          <Header 
            {...this.props}
            login={false}
            menu={false}
            haveAccount={true}
            className="dark-blue-bg"
            context="enterprise"
          />
          <div className="container">
            <h1 className="js-velocity h2">Schedule a Demo</h1>
            <h4 className="js-velocity mid-grey">Please fill out your information and we will contact you to schedule your demonstation.</h4>
            <p className="js-velocity"><Link className="blue" to="exchange">Are you a Broker, Appraiser or Researcher?</Link></p>
            <form className={classnames({
              'demo-request':   true,
              'form-invalid':   this.state.formInvalid
            })} onSubmit={this.submitForm} autocomplete="off">

              <div className={classnames({
                'js-velocity':    true,
                'input-wrap':     true,
                'valid-input':    this.isNotEmpty(this.state.firstName) && this.state.firstNameValid,
                'invalid-input':  !this.state.firstNameValid
              })}>
                <label htmlFor="firstName"> First Name </label>
                <input
                  id="firstName" 
                  type="text" 
                  ref="firstName" 
                  value={this.state.firstName} 
                  onChange={this.handleFirstNameInput} 
                  placeholder="Type your first name"
                />
              </div>

              <div className={classnames({
                'js-velocity':    true,
                'input-wrap':     true,
                'valid-input':    this.isNotEmpty(this.state.lastName) && this.state.lastNameValid,
                'invalid-input':  !this.state.lastNameValid
              })}>
                <label htmlFor="lastName"> Last Name </label>
                <input
                  id="lastName" 
                  type="text" 
                  ref="lastName" 
                  value={this.state.lastName} 
                  onChange={this.handleLastNameInput} 
                  placeholder="Type your last name"
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

              <div className={classnames({
                'js-velocity':    true,
                'input-wrap':     true,
                'select-empty':   !this.isNotEmpty(this.state.business) 
              })}>
                <label> Business </label>
                <select 
                  ref="busness"
                  value={this.state.business} 
                  onChange={this.handleBusinessInput}>
                  <option disabled selected> -- Select Your Business Type -- </option>
                  {businessNodes}
                </select>
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
                <span className="demo-request-submit-error">ALL FIELDS ARE REQUIRED</span>
              </button>
            </form>
            
            <div className="container contact">
              <h6 className="js-velocity">Contact us to learn more</h6>
              <div className="js-velocity">1.646.520.3261</div>
              <a className="js-velocity" href="mailto:enterprise@compstak.com">enterprise@compstak.com</a>
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