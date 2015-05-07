'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var classnames = require('classnames');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var LoginUrlMixin = require('../mixins/LoginUrl.jsx');
var Icons = require('../components/Icons.jsx');

var FauxHeader = React.createClass({

  mixins: [ HomePageRouterMixin, LoginUrlMixin ],

  goToHome: function() {
    this.selectHomePage(this.props.user);
  },

  componentDidMount: function() {
    this.setState({
      loginUrl: this.getLoginUrl()
    });
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
          <div className="right-links">
            <ul>
              <li className={classnames({
                'mobile-hide': true,
                'hidden':      !this.props.login
              })}>
                <a href={loginUrl} className="nav-url" target="_blank">
                  <span>Login</span>
                </a>
              </li>
              <li className={classnames({ 'hidden': !this.props.menu })}>
                <a className="nav-url" onClick={this.props.toggleMenu}>
                  <span>Menu</span>
                  <i className="icon-hamburger"> <Icons type="hamburger"/> </i>
                </a>
              </li>
              <li className={classnames({ 'hidden': !this.props.haveAccount })}>
                <a href={loginUrl} className="button button-hollow login" target="_blank">
                  <span>Have an account?</span>
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