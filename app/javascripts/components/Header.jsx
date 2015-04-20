'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var FauxHeader = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  componentDidMount: function () {
    console.log(this.props.mode)
    console.log(this.isActive('demo-request'))
  },

  render: function () {
    return (
      <div className="dark-blue main-header">
        <div className="container row">
          <div className="logo" onClick={this.goToHome}>
            <Icons type="cs_logo" />
          </div>
          <div className="right-links">
            <ul>
              <li><Link to="enterprise">Login</Link></li>
              <li><a onClick={this.props.toggleMenu}><span>Menu</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = FauxHeader;