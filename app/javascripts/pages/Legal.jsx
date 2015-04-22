'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('../components/Header.jsx');
var LegalContent = require('../components/LegalContent.jsx');
var OnPgSplitter = require('../components/OnPageSplitter.jsx');
var DocumentTitle = require('react-document-title');

var Legal = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    return (
      <DocumentTitle title="CompStak – Legal">
        <div className="page-legal">
          <Header 
            {...this.props}
            login={true}
            menu={true}
            haveAccount={false}
            mode="dark"
          />
          <div className="default-page-title"><h1>Legal</h1></div>
          <LegalContent/>
          <OnPgSplitter/>
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Legal;