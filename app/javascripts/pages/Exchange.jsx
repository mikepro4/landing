'use strict';
var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var Link = Router.Link;

var FauxHeader = require('../components/FauxHeader.jsx');
var Header = require('../components/Header.jsx');
var TopSplash = require('../components/TopSplash.jsx');
var ObjectionHandler = require('../components/ObjectionHandler.jsx');
var Testimonials = require('../components/Testimonials.jsx');
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
          <TopSplash 
            {...this.props}
            context="exchange"
            mode="light"
          />
          <ObjectionHandler 
            {...this.props}
            context="exchange"
            mode="light"
          />
          <Testimonials
            {...this.props}
            context="exchange"
          />
          <Entintro 
            {...this.props}
            context="exchange"
          />
          <section className="dark-blue">
            <h1>Vertification Block</h1>
          </section>
          <EntGranularData 
            {...this.props}
            context="exchange"
          />
          <SampleComp
            {...this.props}
            context="exchange"
          />
          <NationalCoverage 
            {...this.props}
            context="exchange"
          />
          <CoverageMap
            {...this.props}
            context="exchange"
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
            context="exchange"
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