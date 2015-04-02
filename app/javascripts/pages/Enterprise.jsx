'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Enterprise = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    return (
      <div>
        <h1>Enterprise</h1>
        <p>Market: {this.props.user.market}</p> 
        <p>Mode: {this.props.user.mode}</p>

        <p onClick={this.loadMarkets}>Get Markets</p>

        <ul>
          <li><Link to="underwriting">Underwriting</Link></li>
          <li><Link to="asset-management">Asset Management</Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = Enterprise;