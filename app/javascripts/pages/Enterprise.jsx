'use strict';
var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var Link = Router.Link;

var FauxHeader = require('../components/FauxHeader.jsx');
var Header = require('../components/Header.jsx');
var TopSplash = require('../components/TopSplash.jsx');
var Logos = require('../components/Logos.jsx');
var Entintro = require('../components/EnterpriseIntro.jsx');
var EntGranularData = require('../components/GranularData.jsx');
var SampleComp = require('../components/SampleComp.jsx');
var NationalCoverage = require('../components/NationalCoverage.jsx');
var CoverageMap = require('../components/CoverageMap.jsx');
var OnPgSplitter = require('../components/OnPageSplitter.jsx');
var BottomSignUp = require('../components/BottomSignUp.jsx');

var Enterprise = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    return (
      <DocumentTitle title="CompStak – Enterprise">
        <div className="page-enterprise">
          <Header {...this.props}/>
          <FauxHeader {...this.props}/>
          <TopSplash {...this.props}/>
          <Logos {...this.props}/>
          <Entintro {...this.props}/>
          <EntGranularData {...this.props}/>
          <SampleComp {...this.props}/>
          <NationalCoverage {...this.props}/>
          <CoverageMap {...this.props}/>
          <BottomSignUp {...this.props}/>
          <OnPgSplitter {...this.props}/>
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Enterprise;