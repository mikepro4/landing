"use strict";
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var DocumentTitle = require('react-document-title');
var $ = require('jquery');
var classnames = require('classnames');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');

// Components
var SlideInMenu = require('../components/SlideInMenu.jsx');
var Footer = require('../components/Footer.jsx');

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  getInitialState: function () {
    return {
      user: {
        mode: null,
        market: null
      },
      scrollTop: null,
      menuOpen: false
    }
  },

  componentDidMount: function () {
    window.addEventListener('scroll', this.onScroll, true);

    if(this.getQuery().market) {
      this.updateLocalStorage({
        market: this.getQuery().market
      })
    }

    this.showInitialPage();
    this.updateLocalStorage();
  },

  componentWillUnmount: function() {
      window.removeEventListener('scroll', this.onScroll, false);
  },

  onScroll: function (event) {
    // get scrollTop of the body
    var node = this.getDOMNode().parentNode;
    this.setState({
      scrollTop: node.scrollTop
    })
  },

  showInitialPage: function () {
    var user = JSON.parse(localStorage.getItem('user'));
    if(this.isActive('home') && user) {
      this.selectHomePage(user)
    }
  },

  updateLocalStorage: function (data) {
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

  toggleMenu: function() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  },

  render: function () {
    return (
      <DocumentTitle title="CompStak">
        <div className={classnames({
          'application_wrapper':   true,
          'open-menu':             this.state.menuOpen
        })}>    

          <div className="page-content">
            <RouteHandler 
              {...this.props}
              user={this.state.user}
              menuOpen={this.state.menuOpen}
              scrollTop={this.state.scrollTop}
              updateLocalStorage={this.updateLocalStorage}
              toggleMenu={this.toggleMenu}
            />
          </div>

          <SlideInMenu 
            toggleMenu={this.toggleMenu}
          />
          <div className="overlay" onClick={this.toggleMenu}/>
          
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;