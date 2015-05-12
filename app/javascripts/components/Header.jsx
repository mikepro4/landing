'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var classnames = require('classnames');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var TouchMixin = require('../mixins/TouchMixin.jsx');
var LoginUrlMixin = require('../mixins/LoginUrl.jsx');
var Icons = require('../components/Icons.jsx');
React.initializeTouchEvents(true);

var FauxHeader = React.createClass({

  mixins: [ HomePageRouterMixin, LoginUrlMixin, TouchMixin ],

  getDefaultsProps: function() {
    return {
      login: false,
      hiring: false,
      menu: false,
      haveAccount: false
    }
  },

  getInitialState: function() {
    return {
      loginText: "Login",
      hiringText: "We're hiring",
      menuText: "Menu",
      haveAccountText: "Have an account?"
    }
  },

  goToHome: function() {
    this.selectHomePage(this.props.user);
  },

  handleMenuClick: function(event) {
    this.props.toggleMenu();
  },

  render: function() {
    var loginUrl = this.getLoginUrl(this.props.context);

    return (
      <div className={classnames({
        'main-header':  true
      }, this.props.className)}>
        <div className="container row">
          <div className="logo" onClick={this.goToHome}>
            <Icons type="cs_logo" />
          </div>

          <div className={classnames({
            'hiring-tooltip': true,
            'mobile-hide':    true,
            'hidden':         !this.props.hiring
          })}>
            <a href="https://compstak.recruiterbox.com/">
              <i className="arrow"></i>
              <span>{this.state.hiringText}</span>
            </a>
          </div>

          <div className="right-links">
            <ul>
              <li className={classnames({
                'mobile-hide': true,
                'hidden':      !this.props.login
              })}>
                <a href={loginUrl} className="nav-url" target="_blank">
                  <span>{this.state.loginText}</span>
                </a>
              </li>
              <li className={classnames({ 'hidden': !this.props.menu })}>
                <a 
                  className="nav-url" 
                  onClick={ this.handleClick.bind(this, 'handleMenuClick') }  
                  onTouchStart={ this.handleTouch.bind(this, 'handleMenuClick') } >
                  <span>Menu</span>
                  <i className="icon-hamburger"> <Icons type="hamburger"/> </i>
                </a>
              </li>
              <li className={classnames({ 'hidden': !this.props.haveAccount })}>
                <a href={loginUrl} className="button button-hollow login" target="_blank">
                  <span>{this.state.haveAccountText}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = FauxHeader;