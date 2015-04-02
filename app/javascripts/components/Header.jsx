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
        <div className="container">
          <p>Header</p>
          <ul>
            <li><a href="" onClick={this.goToHome}>Home</a></li>
            <li><Link to="splitter">Splitter</Link></li>
          </ul>
        </div>
      </header>
    )
  }
});

module.exports = Header;