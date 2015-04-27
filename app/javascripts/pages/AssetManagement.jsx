'use strict';
var React = require('react');
var Router = require('react-router');

var AssetManagement = React.createClass({

  render: function () {
    return(
      <div>
        <h1>AssetManagement</h1>
        <p>Market: {this.props.user.market}</p> 
        <p>Mode: {this.props.user.mode}</p>
      </div>
    ) 
  }
});

module.exports = AssetManagement;