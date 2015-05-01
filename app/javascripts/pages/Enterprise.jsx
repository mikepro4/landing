'use strict';
var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var Link = Router.Link;

var FauxHeader = require('../components/FauxHeader.jsx');
var Header = require('../components/Header.jsx');
var TopSplash = require('../components/TopSplash.jsx');
var Logos = require('../components/Logos.jsx');
var Intro = require('../components/Intro.jsx');
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
            mode="dark-blue"
            context="enterprise"
          />
          <FauxHeader {...this.props}/>
          <TopSplash 
            {...this.props}
            context="enterprise"
            mode="dark-blue"
          />
          <Logos 
            {...this.props}
            context="enterprise"
            mode="dark-blue"
          />
          <Intro 
            {...this.props}
            context="enterprise"
            mode="grey"
          />
          <EntGranularData 
            {...this.props}
            context="enterprise"
            mode="white"
          />
          <SampleComp 
            {...this.props}
            context="enterprise"
            mode="grey"
          />
          <NationalCoverage 
            {...this.props}
            context="enterprise"
            mode="white"
          />
          <CoverageMap 
            {...this.props}
            context="enterprise"
            mode="grey"
          />
          <BottomSignUp 
            {...this.props}
            context="enterprise"
            mode="dark-blue"
          />
          <OnPgSplitter 
            {...this.props}
            context="enterprise"
            mode="dark-blue"
          />
          <Footer {...this.props}/>
          <VideoModal {...this.props}/>
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Enterprise;