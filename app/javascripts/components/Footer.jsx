'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('underscore');
var classnames = require('classnames');
var NavigationLinks = require('../components/NavigationLinks.jsx');

var Footer = React.createClass({
  render: function () {
    return (
      <footer className="dark-blue">
        <div className="container">
          <div className="row">
            <div className="col nine">
              <NavigationLinks {...this.props} />
            </div>
            <div className="col one logo">
              <svg width="24px" height="28px" viewBox="0 0 24 28">
                <polygon fill="#283040" points="12,0 9.6,1.4 0,6.9 0,20.8 9.6,26.4 12,27.8 24.1,20.8 24.1,18 16.8,22.2 12,24.9 2.5,19.4 
                  2.5,8.4 12,2.9 16.8,5.6 21.6,8.4 12,13.9 12,16.8 24.1,9.8 24.1,6.9    "/>
                <polygon fill="#283040" points="12,22.2 24.1,15.3 24.1,12.4 12,19.4     "/>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    )
  }
});

module.exports = Footer;