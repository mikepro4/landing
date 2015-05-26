'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var classnames = require('classnames');
var Icons = require('../components/Icons.jsx');
var Validators = require('../mixins/Validators.jsx');
var ReadCookiesMixin = require('../mixins/ReadCookies.jsx');

var DemoEmailForm = React.createClass({

  mixins: [ Validators, ReadCookiesMixin ],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      emailInvalid: false,
      email: null
    } 
  }, 

  componentDidMount: function() {
    var email = this.context.router.getCurrentQuery().email;
    if(email) {
      this.setState({
        email: email
      })
    }
  },

  handleFormSubmit: function(event) {
    event.preventDefault();

    if(!this.state.emailInvalid) {
      switch(this.props.context) {
        case "enterprise":
          this.showDemoRequestForm();
          break
        case "exchange":
          this.showSignupForm();
          break
      }
    } 
  },

  showDemoRequestForm: function(event) {
    if(this.isNotEmpty(this.state.email) && this.validateEmail(this.state.email)) {
      this.setState({
        emailInvalid: false
      })
      this.sendHubspotEvent();
      this.context.router.transitionTo('demo-request', {}, {email: this.state.email});
    } else {
      this.setState({
        emailInvalid: true
      })

      _.delay(function () {
        this.setState({
          emailInvalid: false
        })
      }.bind(this), 1300);
    }
  },

  showSignupForm: function(event) {
    if(this.isNotEmpty(this.state.email) && this.validateEmail(this.state.email)) {
      this.setState({
        emailInvalid: false
      })
      window.open(this.props.signupUrl + "?email=" + this.state.email,"_self");  
    } else {
      this.setState({
        emailInvalid: true
      })

      _.delay(function() {
        this.setState({
          emailInvalid: false
        })
      }.bind(this), 1300);
    }
  },

  handleEmailInput: function(event) {
    this.setState({
      email: event.target.value
    })
  },

  getCtaLabel: function() {
    switch(this.props.context) {
      case "enterprise":
        return this.props.ctaLabels.enterprise
      case "exchange":
        return this.props.ctaLabels.exchange
    }
  },

  sendHubspotEvent: function(data) {
    return $.ajax({
      url: '//forms.hubspot.com/uploads/form/v2/460566/a745b83e-2f36-493c-91ea-2804a14dacc9',
      type: 'POST',
      data: {
        email: this.state.email,
        requested_demo: true,
        record_type: 'Enterprise Lead',
        hs_context: JSON.stringify({
          hutk: this.readCookie('hubspotutk')
        })
      },  
      success: function(data) {
        console.log('hubspot event synced')
      },
      error: function(xhr, status, err) {
        console.error("hubspot event didn't sync");
      }
    })
  },

  render: function() {
    return (
      <form className={classnames({
        'sign-up':        true,
        'form-invalid':   this.state.emailInvalid
      })} onSubmit={this.handleFormSubmit}>
        <div className="input-wrap">
          <input 
            type="text" 
            ref="email" 
            value={this.state.email} 
            onChange={this.handleEmailInput} 
            placeholder="Email Address"
          />
          <label> <Icons type="mail_icon" /> </label>
        </div>
        <button className="button">
          <span className="email-submit-label">{this.getCtaLabel()}</span>
          <span className="email-error-label">Email is Invalid</span>
        </button>
      </form>
    )
  }
});

module.exports = DemoEmailForm;