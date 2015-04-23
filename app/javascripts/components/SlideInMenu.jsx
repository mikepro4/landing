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
        <div className="button-wrap" onClick={this.props.toggleMenu}>
          <Link to="demo-request"><button className="button">Schedule a Demo</button></Link>
        </div>
        <h6>Enterprise</h6>
        <ul onClick={this.props.toggleMenu}>
          <li><Link to="enterprise">Learn More</Link></li>
          <li><Link to="demo-request">Schedule A Demo</Link></li>
          <li><Link to="enterprise">Login</Link></li>
          <li><Link to="enterprise">Support</Link></li>
          <li><Link to="enterprise">FAQ</Link></li>
        </ul>
        <h6>Contact</h6>
        <ul onClick={this.props.toggleMenu}>
          <li><a href="mailto:help@compstak.com">help@compstak.com</a></li>
          <li><Link to="enterprise">1-646-926-6707</Link></li>
        </ul>
        <h6>Legal</h6>
        <ul onClick={this.props.toggleMenu}>
          <li><Link to="legal">Terms of Use</Link></li>
          <li><Link to="legal">Privacy Policy</Link></li>
          <li><Link to="legal">Fair Info Statement</Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = SlideInMenu;