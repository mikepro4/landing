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

  getInitialState: function() {
    return {
      jobSelectorOpen: false
    }
  },

  toggleJobMenu: function() {
    this.setState({
      jobSelectorOpen: !this.state.jobSelectorOpen
    }, function () {
      if(this.state.jobSelectorOpen) {
       this.animateJobItems();
      }
    }.bind(this));
  },

  animateJobItems: function() {
    $(".slide-in-menu .js-velocity")
      .stop()
      .velocity("transition.slideDownIn", { 
        stagger: 40
      })
  },

  openJobMenu: function() {
    this.setState({
      jobSelectorOpen: true
    }, function () {
      this.animateJobItems()
    }.bind(this))
  },

  closeMenu: function() { 
    this.props.toggleMenu();
    this.setState({
      jobSelectorOpen: false
    });
  },

  render: function () {
    var jobTitleNodes = this.props.jobOptions.map(function (title, i) {
      return (
        <li className="single-job-title-container js-velocity" key={i} onClick={this.closeMenu}>
          <Link to={this.getUserMode(i)} className={classnames({
            "job-title": true,
            "job-title-active": (title === this.props.user.jobTitle) ? true : false
          })} onClick={this.updateUser} data-position={i}>
            {title}
          </Link>
        </li>
      );
    }.bind(this));

    return (
      <div className="slide-in-menu">

        <div className={classnames({
          "job-titles-list": true,
          "job-menu-active": this.state.jobSelectorOpen 
        })}>
          <h4 className="js-velocity">Which Are you?</h4>
          <ul>
            {jobTitleNodes}
          </ul>
        </div>

        <div className={classnames({
          "customized-experience-message": true,
          "message-active": this.state.jobSelectorOpen 
        })}>
          <p>Please select your job title for <br/>
          customized CompStak experience.</p>
        </div>

        <i className="close-icon" onClick={this.closeMenu}><Icons type="cross"/></i>

        <div className={classnames({
          "slide-in-menu-content": true,
          "menu-content-active": !this.state.jobSelectorOpen
        })}>

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

          <a onClick={this.toggleJobMenu} className={classnames({
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
              Are You Landlord, Lender <br/> or Investor?
            </span>
          </a>

        </div> 
      </div>
    )
  }
});

module.exports = SlideInMenu;