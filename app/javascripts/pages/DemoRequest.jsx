'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var Header = require('../components/Header.jsx');
var Icons = require('../components/Icons.jsx');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Validators = require('../mixins/Validators.jsx');
var classnames = require('classnames');
var Link = Router.Link;

var DemoRequest = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin, Validators ],

  goToHome: function() {
    this.selectHomePage(this.props.user)
  },

  getInitialState: function() {
    return {
      loading: false,
      loaded: false,
      name: null,
      email: this.getQuery().email ? this.getQuery().email : null,
      message: null,
      agreedToSubscribe: true,
      nameValid: true,
      emailValid: true,
      formInvalid: false
    }
  },

  componentDidMount: function() {
    if(this.isMounted()) {
      this.refs.name.getDOMNode().focus();       
    }

    $(".js-velocity")
      .velocity("transition.slideUpIn", { 
        stagger: 50
      })
  },

  submitForm: function (event) {
    event.preventDefault();
    if(this.isNotEmpty(this.state.name) && this.validateEmail(this.state.email)) {
      this.sendEmail({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        agreedToSubscribe: this.state.agreedToSubscribe ? "yes" : "no"
      });
    } else {
      this.setState({
        formInvalid: true
      })

      _.delay(function () {
        this.setState({
          formInvalid: false
        })
      }.bind(this), 2000);

      $('.demo-request').velocity('callout.shake');
    }
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

  sendEmail: function (data) {
    // set loading state with a throbber
    this.setState({
      loading: true,
      loaded: false
    })

    $.ajax({
      url: '/api/demoRequest',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(data) {

        // set loaded state with a tick
        this.setState({
          loading: false,
          loaded: true
        })

      }.bind(this),
      error: function(err) {
        sweetAlert(
          "Sorry there was an error", 
          err, 
          "error"
        );
      }
    });
  },

  render: function () {
    return (
      <div className={classnames({
          'page-demo-request':   true,
          'dark-blue':           true,
          'loading':             this.state.loading,
          'loaded':              this.state.loaded
        })}>
        <Header 
          {...this.props}
          login={false}
          menu={false}
          haveAccount={true}
          mode="dark"
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
                placeholder="Type your name"
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
                placeholder="Describe Your Business"
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
              <label htmlFor="agreedToSubscribe"> <span>Subscribe to CompStak newsletter</span> </label>
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
    )
  }
});

module.exports = DemoRequest;