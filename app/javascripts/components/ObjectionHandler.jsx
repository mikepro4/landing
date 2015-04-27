'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');
var Link = Router.Link;

var ObjectionHandler = React.createClass({
  render: function () {
    return (
      <div className={classnames({
        'objection-handler': true,
        'dark-blue': (this.props.mode == "dark") ? true : false,
        'light': (this.props.mode == "light") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false
      })}>
        <div className="container row">
          <div className="col four">
            <div className="icon"><Icons type="icon_free"/></div>
            <h4 className="h6">100% Free</h4>
            <p>Free forever for brokers, appraisers and researchers.</p>
          </div>
          <div className="col four">
            <div className="icon"><Icons type="icon_anonymous"/></div>
            <h4 className="h6">Anonymous</h4>
            <p>Your membership is anonymous. We never reveal your identity. </p>
          </div>
          <div className="col four">
            <div className="icon"><Icons type="icon_accurate"/></div>
            <h4 className="h6">Accurate</h4>
            <p>Our expert analysts review and cross check every transaction.</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ObjectionHandler;