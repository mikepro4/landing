/* global document */
"use strict";
var React  = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
var style = require('../stylesheets/main.less');

// Make jQuery and plugins available globally
if(process.browser) {
  window.jQuery = require('jquery');
  window.$ = require('jquery');
  require('velocity-animate');
  require('velocity-animate/velocity.ui');
  require('jquery-cycle2');
  require('jquery-cycle2/build/plugin/jquery.cycle2.carousel.min');
}

// Google Analytics and segment.io script embedding
if(process.browser) {
  !function(){
    var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.0.1";
    var segmentIOKey = "FquaBRVzHnSBOGrv65aocaN9sHv5w1lX";
    analytics.load(segmentIOKey);
    analytics.page();
  }}();
}

// Segment tracking
function trackPageView() {
  if(process.browser) {
    // Segment
    analytics.page();
  }
}

// Start App in the Browser
document.addEventListener("DOMContentLoaded", function(event) {
    Router.run(routes, Router.HistoryLocation, function (Handler, state) {
      React.render(<Handler />, document.body);
      trackPageView();
    });
});
