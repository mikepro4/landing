'use strict';

var React         = require('react');
var Router        = require('react-router');
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

/* Components */
var App = require('./pages/App.jsx');

var routes = (
  <Route name="app" path="/" handler={App}>
  </Route>
);

module.exports = routes;
