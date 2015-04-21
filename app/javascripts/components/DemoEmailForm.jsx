'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var Link = Router.Link;

var DemoEmailForm = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  getInitialState: function() {
    return {
      email: null
    } 
  }, 

  showDemoRequestForm: function(event) {
    event.preventDefault();
    if(!_.isEmpty(this.state.email) && this.validateEmail(this.state.email)) {
      this.transitionTo('demo-request', {}, {email: this.state.email});
    } else {
      alert('please provide correct email')
    }
  },

  handleEmailInput: function(event) {
    this.setState({
      email: event.target.value
    })
  },

  validateEmail: function(event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  },

  render: function () {
    return (
      <form className="sign-up" onSubmit={this.showDemoRequestForm}>
        <div className="input-wrap">
          <input type="text" ref="email" onChange={this.handleEmailInput} placeholder="Email Address"/>
          <label>
            <Icons type="mail_icon" />
          </label>
        </div>
        <button>Schedule a Demo</button>
      </form>
    )
  }
});

module.exports = DemoEmailForm;