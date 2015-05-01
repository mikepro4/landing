'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var Icons = require('../components/Icons.jsx');
var UpdateUserMixin = require('../mixins/UpdateUser.jsx');
var LoginUrlMixin = require('../mixins/LoginUrl.jsx');

var SlideInMenu = React.createClass({

  mixins: [ UpdateUserMixin, LoginUrlMixin ],

  render: function () {
    return (
      <div className="slide-in-menu">

        <i className="close-icon" onClick={this.props.toggleMenu}><Icons type="cross"/></i>

        <div className="slide-in-menu-content">

          <div className="button-wrap" onClick={this.props.toggleMenu}>
            <Link to="demo-request"><button className="button">Schedule a Demo</button></Link>
          </div>

          <h6>Enterprise</h6>
          <ul onClick={this.props.toggleMenu}>
            <li><Link to="enterprise">Learn More</Link></li>
            <li><Link to="demo-request">Schedule A Demo</Link></li>
            <li><a href="https://enterprise.compstak.com/" target="_blank">Login</a></li>
            <li><a href="https://compstakenterprise.zendesk.com/hc/en-us" target="_blank" to="enterprise">Support</a></li>
            <li><a href="https://compstakenterprise.zendesk.com/hc/en-us/sections/200624207-Frequently-Asked-Questions" target="_blank" to="enterprise">FAQ</a></li>
          </ul>

          <h6>Contact</h6>
          <ul onClick={this.props.toggleMenu}>
            <li><a href="mailto:sales@compstak.com" target="_blank" title="Contact CompStak Enterpise Sales Representative">sales@compstak.com</a></li>
            <li>1-646-926-6707</li>
          </ul>

          <h6>Legal</h6>
          <ul onClick={this.props.toggleMenu}>
            <li><Link to="legal">Terms of Use</Link></li>
            <li><Link to="legal" query={{scrollTo: "PrivacyPolicy"}}>Privacy Policy</Link></li>
            <li><Link to="legal" query={{scrollTo: "FairStatement"}}>Fair Info Statement</Link></li>
          </ul>

          <Link to="splitter" onClick={this.props.toggleMenu} className={classnames({
            "choose-your-job-title": true,
            "hidden": !this.props.user.mode ? true : false
          })}>
              <span className={classnames({
                "hidden": (this.props.user.mode === "exchange") ? true : false
              })}>
                Are You A Broker, Appraiser <br/> or Researcher?
              </span>

              <span className={classnames({
                "hidden": (this.props.user.mode === "enterprise") ? true : false
              })}>
                Are You A Landlord, Lender <br/> or Investor?
              </span>
          </Link>

        </div> 
      </div>
    )
  }
});

module.exports = SlideInMenu;