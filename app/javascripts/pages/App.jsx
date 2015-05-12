"use strict";
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var _ = require('underscore');
var DocumentTitle = require('react-document-title');
var classnames = require('classnames');

var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var TouchMixin = require('../mixins/TouchMixin.jsx');
var SlideInMenu = require('../components/SlideInMenu.jsx');
var Footer = require('../components/Footer.jsx');
React.initializeTouchEvents(true);

var App = React.createClass({

  mixins: [ HomePageRouterMixin, TouchMixin ],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      signupUrl: "https://signup.compstak.com/",
      jobOptions: ["Tenant/Landlord Rep", "Appraiser", "Researcher", "Landlord", "Lender", "Investor"],
      ctaLabels: {
        enterprise: "Schedule a Demo",
        exchange: "Join Free"
      },
      user: {
        jobTitle: null,
        mode: null,
        market: null
      },
      scrollTop: null,
      menuOpen: false,
      videoPlaying: false
    }
  },

  componentDidMount: function() {
    this.showInitialPage();
    this.updateMarket();
    this.updateLocalStorage();
    $('html').attr('data-useragent',  navigator.userAgent);
  },

  showInitialPage: function() {
    var user = JSON.parse(localStorage.getItem('user'));
    if(this.context.router.isActive('home') && user) {
      this.selectHomePage(user)
    }
  },

  updateMarket: function() {
    var market = this.context.router.getCurrentQuery().market;
    if(market) {
      this.updateLocalStorage({
        market: market
      })
    }
  },

  updateLocalStorage: function(data) {
    var user
    localStorage.getItem('user') ? user = JSON.parse(localStorage.getItem('user')) : user = {}
    localStorage.clear();

    localStorage.setItem('user', JSON.stringify(
      _.extend({}, user, data)
    ));

    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    })
  },

  clearLocalStorage: function() {
    localStorage.clear();
    this.updateLocalStorage();
  },

  toggleMenu: function() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  },

  toggleVideoModal: function() {
    this.setState({
      videoPlaying: !this.state.videoPlaying
    })
  },

  render: function() {
    var methods = {
      updateLocalStorage: this.updateLocalStorage,
      clearLocalStorage: this.clearLocalStorage,
      toggleVideoModal: this.toggleVideoModal,
      toggleMenu: this.toggleMenu
    }

    return (
      <DocumentTitle title="CompStak – Massive Commercial Lease Comps Database – Accurate, searchable, nationwide.">
        <div className={classnames({
          'application_wrapper':   true,
          'open-menu':             this.state.menuOpen
        })}>  

          <div className="page-content">
            <RouteHandler 
              {...this.state}
              {...methods}
            />
          </div>

          <SlideInMenu 
            {...this.state}
            {...methods}
          />

          <div className="overlay"
            onClick={ this.handleClick.bind(this, 'toggleMenu') }  
            onTouchEnd={ this.handleTouch.bind(this, 'toggleMenu') }
          />

          {/* Google Ad Tracking Pixel */}
          <img 
            height="1" 
            width="1"
            src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/936571871/?value=0&amp;guid=ON&amp;script=0"/>

        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;