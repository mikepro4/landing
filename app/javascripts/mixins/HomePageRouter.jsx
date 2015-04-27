'use strict';
var React = require('react');
var Router = require('react-router');

var HomePageRouterMixin = {
  contextTypes: {
    router: React.PropTypes.func
  },

  selectHomePage: function (user) {
    if (user.mode === "enterprise") {
      this.context.router.transitionTo('enterprise')
    } else if (user.mode === "exchange") {
      this.context.router.transitionTo('exchange')
    } else {
      this.context.router.transitionTo('splitter')
    }
  }
}

module.exports = HomePageRouterMixin;