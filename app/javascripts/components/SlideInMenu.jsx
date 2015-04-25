'use strict';
var React = require('react');
var Router = require('react-router');
var UpdateUserMixin = require('../mixins/UpdateUser.jsx');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');
var Link = Router.Link;

var SlideInMenu = React.createClass({

  mixins: [ Router.State, Router.Navigation, UpdateUserMixin ],

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
        <li className="single-job-title-container js-velocity" key={i}>
          <Link to={this.getUserMode(title)} className={classnames({
            "job-title": true,
            "job-title-active": (title === this.props.user.jobTitle) ? true : false
          })} onClick={this.updateUser}>
            {title}
          </Link>
        </li>
      );
    }.bind(this));

    return (
      <div className="slide-in-menu">
        <div className={classnames({
          "job-selector-toggle": true,
          "job-toggle-active": this.state.jobSelectorOpen 
        })} onClick={this.toggleJobMenu}>
          <span className="selected-job-title">{this.props.user.jobTitle}</span>
        </div>

        <div className={classnames({
          "job-titles-list": true,
          "job-menu-active": this.state.jobSelectorOpen 
        })} onClick={this.closeMenu}>
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
            <li><Link to="enterprise">Login</Link></li>
            <li><Link to="enterprise">Support</Link></li>
            <li><Link to="enterprise">FAQ</Link></li>
          </ul>

          <h6>Contact</h6>
          <ul onClick={this.props.toggleMenu}>
            <li><a href="mailto:sales@compstak.com">sales@compstak.com</a></li>
            <li>1-646-926-6707</li>
          </ul>

          <h6>Legal</h6>
          <ul onClick={this.props.toggleMenu}>
            <li><Link to="legal">Terms of Use</Link></li>
            <li><Link to="legal">Privacy Policy</Link></li>
            <li><Link to="legal">Fair Info Statement</Link></li>
          </ul>

        </div> 
      </div>
    )
  }
});

module.exports = SlideInMenu;