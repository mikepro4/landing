'use strict';
var React = require('react');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');
var _ = require('underscore');

var InputError = React.createClass({

  getInitialState: function() {
    return {
      message: 'Input is invalid'
    };
  },

  render: function() { 
    var errorClass = classnames({
      'error_container':   true,
      'visible':           this.props.visible,
      'invisible':         !this.props.visible
    });

    return (
      <div className={errorClass}>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }

});

module.exports = InputError;