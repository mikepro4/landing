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
var Footer = require('../components/Footer.jsx');
var VideoModal = require('../components/VideoModal.jsx');

var Enterprise = React.createClass({

  render: function () {
    return (
      <DocumentTitle title="CompStak – Enterprise – Commercial Lease Comps On Demand for Landlords, Lenders and Investors">
        <div className="page-enterprise">
          <Header 
            {...this.props}
            login={true}
            menu={true}
            haveAccount={false}
            mode="dark"
            context="enterprise"
          />
          <FauxHeader {...this.props}/>
          <TopSplash 
            {...this.props}
            context="enterprise"
            mode="dark"
          />
          <Logos 
            {...this.props}
            context="enterprise"
          />
          <Entintro 
            {...this.props}
            context="enterprise"
          />
          <EntGranularData 
            {...this.props}
            context="enterprise"
          />
          <SampleComp 
            {...this.props}
            context="enterprise"
          />
          <NationalCoverage 
            {...this.props}
            context="enterprise"
          />
          <CoverageMap 
            {...this.props}
            context="enterprise"
          />
          <BottomSignUp 
            {...this.props}
            context="enterprise"
            mode="dark"
          />
          <OnPgSplitter {...this.props}/>
          <Footer {...this.props}/>
          <VideoModal {...this.props}/>
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Enterprise;