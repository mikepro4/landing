'use strict';
var React = require('react');
var Router = require('react-router');

var HomePageRouterMixin = {
  contextTypes: {
    router: React.PropTypes.func
  },

  selectHomePage: function (user) {
    switch(user.mode) {
      case "enterprise":
        this.context.router.transitionTo('enterprise')
        break
      case "exchange": 
        this.context.router.transitionTo('exchange')
        break
      default: 
        this.context.router.transitionTo('splitter')
    }
  }
}

module.exports = HomePageRouterMixin;