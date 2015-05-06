'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var classnames = require('classnames');
var Icons = require('../components/Icons.jsx');
var Validators = require('../mixins/Validators.jsx');

var DemoEmailForm = React.createClass({

  mixins: [ Validators ],

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

      _.delay(function () {
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

  render: function () {
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