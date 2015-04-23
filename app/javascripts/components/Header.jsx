'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');

var FauxHeader = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  getInitialState: function() {
    return {
      mode: this.props.mode,
      login: this.props.login,
      menu: this.props.menu,
      haveAccount: this.props.haveAccount
    }
  },

  goToHome: function() {
    this.selectHomePage(this.props.user)
  },

  componentDidMount: function() {
    this.setState({
      loginUrl: this.getLoginUrl()
    })
  },

  getLoginUrl: function(mode) {
    switch(mode){
      case "enterprise": 
        return "https://enterprise.compstak.com/"
        break
      case "exchange":
        return "https://exchange.compstak.com/"
        break
    }
  },

  render: function() {
    var loginUrl = this.getLoginUrl(this.props.user.mode);

    return (
      <div className={classnames({
        'dark-blue': (this.state.mode == "dark") ? true : false,
        'light': (this.state.mode == "light") ? true : false,
        'main-header': true
      })}>
        <div className="container row">
          <div className="logo" onClick={this.goToHome}>
            <Icons type="cs_logo" />
          </div>
          <div className="right-links">
            <ul>
              <li className={classnames({ 'hidden': !this.state.login })}>
                <a href={loginUrl} className="nav-url" target="_blank">
                  <span>Login</span>
                </a>
              </li>
              <li className={classnames({ 'hidden': !this.state.menu })}>
                <a className="nav-url" onClick={this.props.toggleMenu}>
                  <span>Menu</span>
                  <i className="icon-hamburger">
                    <Icons type="hamburger"/>
                  </i>
                </a>
              </li>
              <li className={classnames({ 'hidden': !this.state.haveAccount })}>
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