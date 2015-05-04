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

  getInitialState: function() {
    return {
      context: "exchange"
    }
  },

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
            context={this.state.context}
          />
          <FauxHeader
           {...this.props}
           context={this.state.context}
          />
          <TopSplash 
            {...this.props}
            mode="white"
            context={this.state.context}
          />
          <ObjectionHandler 
            {...this.props}
            mode="white"
            context={this.state.context}
          />
          <Testimonials
            {...this.props}
            mode="black"
            context={this.state.context}
          />
          <Intro 
            {...this.props}
            mode="grey"
            context={this.state.context}
          />
          <HowItWorks 
            {...this.props}
            mode="white"
            context={this.state.context}
          />
          <ObjectionHandler2 
            {...this.props}
            mode="black"
            context={this.state.context}
          />
          <AccurateComps 
            {...this.props}
            mode="grey"
            context={this.state.context}
          />
          <EntGranularData 
            {...this.props}
            mode="white"
            context={this.state.context}
          />
          <SampleComp
            {...this.props}
            mode="grey"
            context={this.state.context}
          />
          <NationalCoverage 
            {...this.props}
            mode="white"
            context={this.state.context}
          />
          <CoverageMap
            {...this.props}
            mode="grey"
            context={this.state.context}
          />
          <BottomSignUp
            {...this.props}
            mode="blue"
            context={this.state.context}
          />
          <ObjectionHandler 
            {...this.props}
            mode="blue"
            context={this.state.context}
          />
          <OnPgSplitter 
            {...this.props}
            mode="dark-blue"
            context={this.state.context}
          />
          <Footer
            {...this.props}
            context={this.state.context}
          />
          <VideoModal
            {...this.props}
            context={this.state.context}
          />
        </div>
      </DocumentTitle>
    )
  }
});

module.exports = Exchange;