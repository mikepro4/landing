'use strict';
var React = require('react');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');

var Logos = React.createClass({
  render: function () {
    return (
      <div className={classnames({
        'logos':     true
      }, this.props.className)}>
        <div className="container">
          <p className="h6 mid-grey">Proudly Trusted By</p>
          <ul className="row">
            <li>
              <Icons type="logo_eq" />
            </li>
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
              <Icons type="logo_silverstein" />
            </li>
            <li>
              <Icons type="logo_davis" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Logos;