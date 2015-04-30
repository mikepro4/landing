/* global document */
"use strict";

if(process.browser) {
  window.jQuery = require('jquery');
  window.$ = require('jquery');
  require('velocity-animate');
  require('velocity-animate/velocity.ui')
  require('jquery-cycle2');
}

var React  = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
var style = require('../stylesheets/main.less');

document.addEventListener("DOMContentLoaded", function(event) {
    Router.run(routes, Router.HistoryLocation, function (Handler, state) {
      React.render(<Handler />, document.body);
    });
});
