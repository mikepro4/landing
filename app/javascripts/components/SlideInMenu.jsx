'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var Icons = require('../components/Icons.jsx');
var NavigationLinks = require('../components/NavigationLinks.jsx');
var UpdateUserMixin = require('../mixins/UpdateUser.jsx');
var LoginUrlMixin = require('../mixins/LoginUrl.jsx');

var SlideInMenu = React.createClass({

  mixins: [ UpdateUserMixin, LoginUrlMixin ],

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

  getSplitterLink: function() {
    switch(this.state.context) {
      case "exchange":
        return (
          <Link to="splitter" onClick={this.props.clearLocalStorage} className="choose-your-job-title">
            Are You A Landlord, Lender <br/> or Investor?
          </Link>
        )
      case "enterprise":
        return (
          <Link to="splitter" onClick={this.props.clearLocalStorage} className="choose-your-job-title">
            Are You A Broker, Appraiser <br/> or Researcher?
          </Link>
        )
    }
  },

  render: function () {
    return (
      <div className="slide-in-menu" onClick={this.props.toggleMenu}>

        <i className="close-icon"><Icons type="cross"/></i>

        <div className="slide-in-menu-content">

          <div className="button-wrap">
            {this.getCtaButton()}
          </div>

          <div className="slide-in-menu-links-container">
            <NavigationLinks 
              {...this.props}
              context={this.state.context}
            />
          </div>

          <div className="slide-in-menu-splitter-link">
            {this.getSplitterLink()}
          </div>
    
        </div> 
      </div>
    )
  }
});

module.exports = SlideInMenu;