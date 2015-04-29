'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');
var Link = Router.Link;

var ObjectionHandler2 = React.createClass({
  render: function () {
    return (
      <div className={classnames({
        'objection-handler': true,
        'dark-blue': (this.props.mode == "dark") ? true : false,
        'light': (this.props.mode == "light") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false
      })}>
        <div className="container row">
          <div className="col four">
            <div className="icon small"><Icons type="tick"/></div>
            <h4 className="h6">No Data Entry</h4>
            <p>Send your comps in any format – it only takes 60 seconds. We handle all data entry.</p>
          </div>
          <div className="col four">
            <div className="icon small"><Icons type="tick"/></div>
            <h4 className="h6">Anonymous</h4>
            <p>Your membership is anonymous. We never reveal your identity, even when you share comps.</p>
          </div>
          <div className="col four">
            <div className="icon small"><Icons type="tick"/></div>
            <h4 className="h6">Share Any Comp</h4>
            <p>You can share information about your own deals, or deals that others have shared with you.</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ObjectionHandler2;