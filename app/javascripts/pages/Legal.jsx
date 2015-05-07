'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = require('../components/Header.jsx');
var FauxHeader = require('../components/FauxHeader.jsx');
var TermsOfUse = require('../components/TermsOfUse.jsx');
var PrivacyPolicy = require('../components/PrivacyPolicy.jsx');
var FairInformation = require('../components/FairInformation.jsx');
var OnPgSplitter = require('../components/OnPageSplitter.jsx');
var DocumentTitle = require('react-document-title');
var Footer = require('../components/Footer.jsx');

var Legal = React.createClass({

  render: function () {
    return (
      <DocumentTitle title="CompStak – Terms of Use, Privacy Policy, Fair Statement">
        <div className="page-legal">
          <FauxHeader {...this.props}/>

          <Header 
            {...this.props}
            login={false}
            menu={true}
            haveAccount={false}
            className="white-bg"
          />

          <TermsOfUse {...this.props} />

          <hr/>

          <PrivacyPolicy {...this.props} />

          <hr/>

          <FairInformation {...this.props} />

          <OnPgSplitter {...this.props}
            className="dark-blue-bg"
          />

          <Footer {...this.props} />
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Legal;