'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var Logos = React.createClass({
  render: function () {
    return (
      <div className="dark-blue logos">
        <div className="container">
          <p className="h6 mid-grey">Proudly Trusted By</p>
          <ul className="row">
            <li>
              <Icons type="logo_wells_fargo" />
            </li>
            <li>
              <Icons type="logo_tishman" />
            </li>
            <li>
              <Icons type="logo_wells_fargo" />
            </li>
            <li>
              <Icons type="logo_wells_fargo" />
            </li>
            <li>
              <Icons type="logo_carlyle" />
            </li>
            <li>
              <Icons type="logo_beacon" />
            </li>
            <li>
              <Icons type="logo_cpp" />
            </li>
            <li>
              <Icons type="logo_hff" />
            </li>
            <li>
              <Icons type="logo_wells_fargo" />
            </li>
            <li>
              <Icons type="logo_wells_fargo" />
            </li>
            <li>
              <Icons type="logo_wells_fargo" />
            </li>
            <li>
              <Icons type="logo_wells_fargo" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Logos;