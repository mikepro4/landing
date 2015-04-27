'use strict';
var React = require('react');
var Router = require('react-router');

var Underwriting = React.createClass({

  render: function () {
    return(
      <div>
        <h1>Underwriting</h1>
        <p>Market: {this.props.user.market}</p> 
        <p>Mode: {this.props.user.mode}</p>
      </div>
    ) 
  }
});

module.exports = Underwriting;