'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var Validators = require('../mixins/Validators.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

if(process.browser) {
  console.log(process)
}

var DemoEmailForm = React.createClass({

  mixins: [ Router.State, Router.Navigation, Validators ],

  getInitialState: function() {
    return {
      emailInvalid: false,
      email: null
    } 
  }, 

  componentDidMount: function() {
    console.log(this.context)
    if(this.getQuery().email) {
      this.setState({
        email: this.getQuery().email
      })
    }
  },

  showDemoRequestForm: function(event) {
    event.preventDefault();
    if(this.isNotEmpty(this.state.email) && this.validateEmail(this.state.email)) {
      this.setState({
        emailInvalid: false
      })
      this.transitionTo('demo-request', {}, {email: this.state.email});
    } else {
      this.setState({
        emailInvalid: true
      })

      _.delay(function () {
        this.setState({
          emailInvalid: false
        })
      }.bind(this), 1300);

      $('.sign-up').velocity('callout.shake');
    }
  },

  handleEmailInput: function(event) {
    this.setState({
      email: event.target.value
    })
  },

  render: function () {
    return (
      <form className={classnames({
        'sign-up':   true,
        'form-invalid':   this.state.emailInvalid
      })} onSubmit={this.showDemoRequestForm}>
        <div className="input-wrap">
          <input type="text" ref="email" value={this.state.email} onChange={this.handleEmailInput} placeholder="Email Address"/>
          <label> <Icons type="mail_icon" /> </label>
        </div>
        <button className="button">
          <span className="email-submit-label">Schedule a Demo</span>
          <span className="email-error-label">Email is Invalid</span>
        </button>
      </form>
    )
  }
});

module.exports = DemoEmailForm;