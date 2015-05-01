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

  render: function () {
    return (
      <DocumentTitle title="CompStak – Exchange">
        <div className="page-exchange">
         <Header 
            {...this.props}
            login={true}
            menu={true}
            haveAccount={false}
            mode="white"
            context="exchange"
          />
          <FauxHeader {...this.props}/>
          <TopSplash 
            {...this.props}
            context="exchange"
            mode="white"
          />
          <ObjectionHandler 
            {...this.props}
            context="exchange"
            mode="white"
          />
          <Testimonials
            {...this.props}
            context="exchange"
            mode="black"
          />
          <Intro 
            {...this.props}
            context="exchange"
            mode="grey"
          />
          <HowItWorks 
            {...this.props}
            context="exchange"
            mode="white"
          />
          <ObjectionHandler2 
            {...this.props}
            context="exchange"
            mode="black"
          />
          <AccurateComps 
            {...this.props}
            context="exchange"
            mode="grey"
          />
          <EntGranularData 
            {...this.props}
            context="exchange"
            mode="white"
          />
          <SampleComp
            {...this.props}
            context="exchange"
            mode="grey"
          />
          <NationalCoverage 
            {...this.props}
            context="exchange"
            mode="white"
          />
          <CoverageMap
            {...this.props}
            context="exchange"
            mode="grey"
          />
          <BottomSignUp
            {...this.props}
            context="exchange"
            mode="blue"
          />
          <ObjectionHandler 
            {...this.props}
            context="exchange"
            mode="blue"
          />
          <OnPgSplitter 
            {...this.props}
            context="enterprise"
            mode="dark-blue"
          />
          <Footer
            {...this.props}
            context="exchange"
          />
          <VideoModal
            {...this.props}
            context="exchange"
          />
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Exchange;