'use strict';

var React         = require('react');
var Router        = require('react-router');
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

/* Components */
var App = require('./pages/App.jsx');
var NotFound = require('./pages/NotFound.jsx');
var Exchange = require('./pages/Exchange.jsx');
var Enterprise = require('./pages/Enterprise.jsx');
var Splitter = require('./pages/Splitter.jsx');
var Underwriting = require('./pages/Underwriting.jsx');
var AssetManagement = require('./pages/AssetManagement.jsx');

var routes = (
  <Route name="app" path="/" handler={App}>

    <Route name="home" path="/" handler={Splitter} />
    <Route name="splitter" path="splitter/" handler={Splitter} />
    
    <Route name="enterprise" path="enterprise/" handler={Enterprise} />
    <Route name="underwriting" path="enterprise/underwriting/" handler={Underwriting} />
    <Route name="asset-management" path="enterprise/asset-management/" handler={AssetManagement} />

    <Route name="exchange" path="exchange/" handler={Exchange} />

    <NotFoundRoute name="notfound" handler={NotFound} />
  </Route>
);

module.exports = routes;
