'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var DemoEmailForm = require('../components/DemoEmailForm.jsx');
var Link = Router.Link;

var TopSplash = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    return (
      <div className="dark-blue top-splash">
        <div className="container">
          <h1>Commercial Lease Comps On Demand</h1>
          <h2 className="h4 blue">Verified Lease Data & Market Analytics For Major Markets Nationwide</h2>
          <DemoEmailForm />
          <div className="splash-ui">
            <img className="ui" src="http://placehold.it/700x400/cccccc/777777"/>
            <img className="macbook" src="/images/macbook.svg"/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TopSplash;