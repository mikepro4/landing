'use strict';
var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var Link = Router.Link;

var FauxHeader = require('../components/FauxHeader.jsx');
var Header = require('../components/Header.jsx');
var TopSplash = require('../components/TopSplash.jsx');
var ObjectionHandler = require('../components/ObjectionHandler.jsx');
var ObjectionHandler2 = require('../components/ObjectionHandler2.jsx');
var Testimonials = require('../components/Testimonials.jsx');
var Logos = require('../components/Logos.jsx');
var Intro = require('../components/Intro.jsx');
var HowItWorks = require('../components/HowItWorks.jsx');
var AccurateComps = require('../components/AccurateComps.jsx');
var EntGranularData = require('../components/GranularData.jsx');
var SampleComp = require('../components/SampleComp.jsx');
var NationalCoverage = require('../components/NationalCoverage.jsx');
var CoverageMap = require('../components/CoverageMap.jsx');
var OnPgSplitter = require('../components/OnPageSplitter.jsx');
var BottomSignUp = require('../components/BottomSignUp.jsx');
var Footer = require('../components/Footer.jsx');
var VideoModal = require('../components/VideoModal.jsx');

var Exchange = React.createClass({

  getDefaultProps: function() {
    return {
      context: "exchange"
    }    
  },

  render: function () {
    return (
      <DocumentTitle title="CompStak – Exchange – Free lease comps exchange for CRE brokers, appraisers and researchers.">
        <div className="page-exchange">

         <Header 
            {...this.props}
            login={true}
            menu={true}
            haveAccount={false}
            mode="white"
          />

          <FauxHeader {...this.props}/>

          <TopSplash {...this.props}
            mode="white"
          />

          <ObjectionHandler {...this.props}
            mode="white"
          />

          <Testimonials {...this.props}
            mode="black"
          />

          <Intro {...this.props}
            mode="grey"
          />

          <HowItWorks {...this.props}
            mode="white"
          />

          <ObjectionHandler2 {...this.props}
            mode="black"
          />

          <AccurateComps {...this.props}
            mode="grey"
          />

          <EntGranularData {...this.props}
            mode="white"
          />

          <SampleComp {...this.props}
            mode="grey"
          />

          <NationalCoverage {...this.props}
            mode="white"
          />

          <CoverageMap {...this.props}
            mode="grey"
          />

          <BottomSignUp {...this.props}
            mode="blue"
          />

          <ObjectionHandler {...this.props}
            mode="blue"
          />

          <OnPgSplitter {...this.props}
            mode="dark-blue"
          />

          <Footer {...this.props} />
          
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Exchange;