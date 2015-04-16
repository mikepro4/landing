'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var FauxHeader = require('../components/FauxHeader.jsx');
var LegalContent = require('../components/LegalContent.jsx');
var OnPgSplitter = require('../components/OnPageSplitter.jsx');

var Legal = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    return (
      <div>
        <FauxHeader/>
        <div className="default-page-title"><h1>Legal</h1></div>
        <LegalContent/>
        <OnPgSplitter/>
      </div>
    )
  }
});

module.exports = Legal;