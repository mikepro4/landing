'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var Link = Router.Link;

var DemoRequest = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  getInitialState: function() {
    return {
      name: null,
      email: this.getQuery().email ? this.getQuery().email : null,
      message: null,
      agreedToSubscribe: "no"
    }
  },

  submitForm: function (event) {
    event.preventDefault();
    if(!_.isEmpty(this.state.name) && 
       !_.isEmpty(this.state.email) &&
       !_.isEmpty(this.state.message)
    ) {
      this.sendEmail(this.state);
    } else {
      alert('Please Fill in Name, Email and Message')
    }
  },

  handleNameInput: function (event) {
    this.setState({
      name: event.target.value
    })
  },

  handleEmailInput: function (event) {
    this.setState({
      email: event.target.value
    })
  },

  handleMessageInput: function (event) {
    this.setState({
      message: event.target.value
    })
  },

  handleSubscribeInput: function (event) {
    this.setState({
      agreedToSubscribe: event.target.checked ? "yes" : "no"
    })
  },

  sendEmail: function (data) {
    $.ajax({
      url: '/api/demoRequest',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        alert(err)
      }
    });
  },

  render: function () {
    return (
      <div className="page-demo-request">
        <form className="demo-request" onSubmit={this.submitForm}>
          <div className="input-wrap">
            <label>
              Name
            </label>
            <input type="text" ref="name" value={this.state.name} onChange={this.handleNameInput} placeholder="Name"/>
          </div>
          <div className="input-wrap">
            <label>
              Email
            </label>
            <input type="text" ref="email" value={this.state.email} onChange={this.handleEmailInput} placeholder="Email Address"/> 
          </div>
          <div className="input-wrap">
            <label>
              Business
            </label>
            <textarea ref="message" value={this.state.message}  onChange={this.handleMessageInput} placeholder="Describe Your Business"/>
          </div>
          <div className="input-wrap">
            <input type="checkbox" ref="agreedToSubscribe"  onChange={this.handleSubscribeInput}  />
            <label>
              Subscribe
            </label>
          </div>
          <button>Schedule a Demo</button>
        </form>
      </div>
    )
  }
});

module.exports = DemoRequest;