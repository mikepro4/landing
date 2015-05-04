'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var Logos = React.createClass({
  render: function () {
    return (
      <div className={classnames({
        'logos': true,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false,
      })}>
        <div className="container">
          <p className="h6 mid-grey">Proudly Trusted By</p>
          <ul className="row">
            <li>
              <Icons type="logo_wells_fargo" />
            </li>
            <li>
              <Icons type="logo_tishman" />
            </li>
            <li className="small">
              <Icons type="logo_ab" />
            </li>
            <li>
              <Icons type="logo_cim" />
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
              <Icons type="logo_empire" />
            </li>
            <li>
              <Icons type="logo_ar_capital" />
            </li>
            <li>
              <Icons type="logo_davis" />
            </li>
            <li>
              <Icons type="logo_eq" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Logos;