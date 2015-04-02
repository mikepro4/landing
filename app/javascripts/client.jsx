/* global document */
"use strict";

var React  = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

var style = require('../stylesheets/main.less');

document.addEventListener("DOMContentLoaded", function(event) {
    Router.run(routes, Router.HistoryLocation, function (Handler, state) {
      React.render(<Handler />, document.body);
    });
});
