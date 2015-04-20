'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');
var Link = Router.Link;

var SlideInMenu = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    if( this.props.scrollTop > 150) {
      var menuClass = true
    } else {
      var menuClass = false
    }
    return (
      <div className="slide-in-menu">
        <i className="close-icon" onClick={this.props.toggleMenu}><Icons type="cross"/></i>
        <div className="button-wrap">
          <button>Schedule a Demo</button>
        </div>
        <h6>Enterprise</h6>
        <ul>
          <li><Link to="enterprise">Learn More</Link></li>
          <li><Link to="enterprise">Schedule A Demo</Link></li>
          <li><Link to="enterprise">Login</Link></li>
          <li><Link to="enterprise">Support</Link></li>
          <li><Link to="enterprise">FAQ</Link></li>
        </ul>
        <h6>Contact</h6>
        <ul>
          <li><Link to="enterprise">Sales@CompStak.com</Link></li>
          <li><Link to="enterprise">1-646-926-6707</Link></li>
        </ul>
        <h6>Legal</h6>
        <ul>
          <li><Link to="enterprise">Terms of Use</Link></li>
          <li><Link to="enterprise">Privacy Policy</Link></li>
          <li><Link to="enterprise">Fair Info Statement</Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = SlideInMenu;