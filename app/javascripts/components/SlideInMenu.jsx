'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var Icons = require('../components/Icons.jsx');
var NavigationLinks = require('../components/NavigationLinks.jsx');
var TouchMixin = require('../mixins/TouchMixin.jsx');
var UpdateUserMixin = require('../mixins/UpdateUser.jsx');
var LoginUrlMixin = require('../mixins/LoginUrl.jsx');
React.initializeTouchEvents(true);

var SlideInMenu = React.createClass({

  mixins: [ UpdateUserMixin, LoginUrlMixin, TouchMixin ],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      context: null
    }
  },

  componentWillReceiveProps: function(newprops) {
    if(newprops.menuOpen) {
      this.updateActivePageState();
    }
  },

  updateActivePageState: function() {
    if(this.context.router.isActive('enterprise')) {
      this.setState({
        context: "enterprise"
      })
    } else if (this.context.router.isActive('exchange')) {
      this.setState({
        context: "exchange"
      })
    } else {
      this.setState({
        context: "generic"
      })
    }
  },

  getCtaButton: function() {
    switch(this.state.context) {
      case "exchange":
        return (
          <a href="https://signup.compstak.com/" className="button">
            {this.props.ctaLabels.exchange}
          </a>
        )
      case "enterprise":
        return (
          <Link to="demo-request">
            <button className="button">
              {this.props.ctaLabels.enterprise}
            </button>
          </Link>
        )
      case "generic":
        return (
          <ul className="compstak_products" onClick={this.props.toggleMenu}>
            <li>
              <Link to="splitter" onClick={this.props.clearLocalStorage}>
                <h6>COMPSTAK EXCHANGE</h6>
                <p>For Brokers, Appraisers <br/> & Researchers</p>
              </Link>
            </li>

            <li>
              <Link to="splitter" onClick={this.props.clearLocalStorage}>
                <h6>COMPSTAK ENTERPRISE</h6>
                <p>For Lenders, Landlords <br/> & Investors</p>
              </Link>
            </li>
          </ul>
        )
    }
  },  

  getSplitterLinkText: function() {
    switch(this.state.context) {
      case "exchange":
        return "Are You A Landlord, Lender or Investor?"
      case "enterprise":
        return "Are You A Broker, Appraiser or Researcher?"
    }
  },

  handleClose: function(event) {
    this.props.toggleMenu()
  },

  clearLocalStorage: function() {
    this.props.clearLocalStorage();
    this.props.toggleMenu()
  },

  render: function() {
    return (
      <div className="slide-in-menu">
        <i 
          className="close-icon" 
          onClick={ this.handleClick.bind(this, 'handleClose') }
          onTouchStart={ this.handleTouch.bind(this, 'handleClose') }>
        <Icons type="cross"/></i>

        <div className="slide-in-menu-content">

          <div className="button-wrap">
            {this.getCtaButton()}
          </div>

          <div className="slide-in-menu-links-container">
            <NavigationLinks 
              {...this.props}
              context={this.state.context}
              onClick={ this.handleClick.bind(this, 'handleClose') }
            />
          </div>

          <div 
            className="slide-in-menu-splitter-link"
            onClick={ this.handleClick.bind(this, 'clearLocalStorage') }  
            onTouchEnd={ this.handleTouch.bind(this, 'clearLocalStorage') } >
            <Link 
              to="splitter"
              className="choose-your-job-title">
              {this.getSplitterLinkText()}
            </Link>
          </div>
    
        </div> 
      </div>
    )
  }
});

module.exports = SlideInMenu;