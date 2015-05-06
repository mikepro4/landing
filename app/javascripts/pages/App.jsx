"use strict";
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var DocumentTitle = require('react-document-title');
var $ = require('jquery');
var classnames = require('classnames');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var FPSStats = require('react-stats').FPSStats;

// Components
var SlideInMenu = require('../components/SlideInMenu.jsx');
var Footer = require('../components/Footer.jsx');


var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({

  mixins: [ HomePageRouterMixin ],

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
    window.addEventListener('scroll', this.onScroll, false);
    this.onScroll();

    var market = this.context.router.getCurrentQuery().market;
    if(market) {
      this.updateLocalStorage({
        market: market
      })
    }

    this.showInitialPage();
    this.updateLocalStorage();
  },

  componentWillUnmount: function() {
      window.removeEventListener('scroll', this.onScroll, false);
  },

  onScroll: function(event) {
    this.setState({
      scrollTop: $(window).scrollTop()
    })
  },

  showInitialPage: function() {
    var user = JSON.parse(localStorage.getItem('user'));
    if(this.context.router.isActive('home') && user) {
      this.selectHomePage(user)
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

          <div className="overlay" onClick={this.toggleMenu} />

        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;