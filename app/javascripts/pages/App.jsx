"use strict";

var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var DocumentTitle = require('react-document-title');
var Header = require('../components/Header.jsx');

var RouteHandler = Router.RouteHandler;
var Link= Router.Link;

var App = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    return (
      <DocumentTitle title="CompStak">
        <div>
          <Header />
          App Content
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;