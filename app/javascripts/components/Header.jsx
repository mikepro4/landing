'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Link = Router.Link;

var Header = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <header>
        <a href="" onClick={this.goToHome}>Home</a> 
        <p>Header content</p>
      </header>
    )
  }
});

module.exports = Header;