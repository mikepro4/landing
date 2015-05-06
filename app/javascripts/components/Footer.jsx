'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('underscore');
var classnames = require('classnames');
var Icons = require('../components/Icons.jsx');
var NavigationLinks = require('../components/NavigationLinks.jsx');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="dark-blue">
        <div className="container">
          <div className="row">
            <div className="col nine">
              <NavigationLinks {...this.props} />
            </div>
            <div className="col one logo">
              <Icons type="cs_icon" />
            </div>
          </div>
        </div>
      </footer>
    )
  }
});

module.exports = Footer;