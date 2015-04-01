'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    return (
      <header>
        Header
      </header>
    )
  }
});

module.exports = Header;