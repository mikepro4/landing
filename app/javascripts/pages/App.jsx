"use strict";

var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var DocumentTitle = require('react-document-title');

var Header = require('../components/Header.jsx');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  getInitialState: function () {
    return {
      user: {
        mode: null,
        market: null
      }
    }
  },

  componentDidMount: function () {
    if(this.getQuery().market) {
      this.updateLocalStorage({
        market: this.getQuery().market
      })
    }

    this.showInitialPage();
    this.updateLocalStorage();
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

  render: function () {
    return (
      <DocumentTitle title="CompStak">
        <div className="application_wrapper">
          <Header 
            user={this.state.user}
          />
          <RouteHandler 
            {...this.props}
            user={this.state.user}
            updateLocalStorage={this.updateLocalStorage}
          />
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;