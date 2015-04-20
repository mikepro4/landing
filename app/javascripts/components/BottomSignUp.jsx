'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var DemoEmailForm = require('../components/DemoEmailForm.jsx');
var Link = Router.Link;

var BottomSignUp = React.createClass({

  render: function () {
    return (
      <div className="dark-blue bottom-sign-up">
        <div className="container">
          <p className="h3">Learn how CompStak data can help you close better, faster deals.</p>
          <DemoEmailForm/>
        </div>
      </div>
    )
  }
});

module.exports = BottomSignUp;