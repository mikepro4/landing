'use strict';
var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var Link = Router.Link;

var FauxHeader = require('../components/FauxHeader.jsx');
var Header = require('../components/Header.jsx');
var OnPgSplitter = require('../components/OnPageSplitter.jsx');
var Footer = require('../components/Footer.jsx');

var Exchange = React.createClass({

  render: function () {
    return (
      <DocumentTitle title="CompStak – Exchange">
        <div className="page-exchange">
         <Header 
            {...this.props}
            login={true}
            menu={true}
            haveAccount={false}
            mode="light"
            context="exchange"
          />
          <FauxHeader {...this.props}/>
          <OnPgSplitter {...this.props}/>
          <Footer {...this.props}/>
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Exchange;