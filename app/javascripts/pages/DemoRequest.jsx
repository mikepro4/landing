'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var Header = require('../components/Header.jsx');
var Icons = require('../components/Icons.jsx');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var classnames = require('classnames');
var Link = Router.Link;

if(process.browser) {
  var sweetAlert = require('sweetalert');
}

var DemoRequest = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  getInitialState: function() {
    return {
      loading: false,
      loaded: false,
      name: null,
      email: this.getQuery().email ? this.getQuery().email : null,
      message: null,
      agreedToSubscribe: true
    }
  },

  submitForm: function (event) {
    event.preventDefault();
    if(!_.isEmpty(this.state.name) && 
       !_.isEmpty(this.state.email) &&
       !_.isEmpty(this.state.message)
    ) {
      this.sendEmail({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        agreedToSubscribe: this.state.agreedToSubscribe ? "yes" : "no"
      });
    } else {
      sweetAlert(
        "Please fill in all fields.", 
        "You must provide your name, valid email address and description of your business", 
        "error"
      );
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
          <h1 className="h2">Schedule a Demo</h1>
          <h4 className="mid-grey">Please fill out your information and we will contact you to schedule your demonstation.</h4>
          <p><Link className="blue" to="exchange">Are you a Broker, Appraiser or Researcher?</Link></p>
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
              <input type="checkbox" ref="agreedToSubscribe" defaultChecked={this.state.agreedToSubscribe} onChange={this.handleSubscribeInput}  />
              <label>
                Subscribe
              </label>
            </div>
            <button className="button">Schedule a Demo</button>
          </form>
          <div className="container contact">
            <h6>Contact us to learn more</h6>
            <a href="tel:16465203261">1.646.520.3261</a>
            <a href="mailto:enterprise@compstak.com">Enterprise@CompStak.com</a>
          </div>
          <div className="success-alert">
            <div className="loader">
              <div className="spinner"></div>
              <div className="check"><Icons type="tick" /></div>
            </div>
            <div className="message">
              <p className="h1">Thank You!</p>
              <p className="mid-grey">We will contact you shortly.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = DemoRequest;