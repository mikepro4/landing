'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');

var Link = Router.Link;

var NationalCoverage = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
    }
  },

  componentDidMount: function() {
    $('.slideshow').cycle({
        speed: 500,
        manualSpeed: 500,
        pager : '.pager',
        pagerTemplate : '<li><span>•</span></li>',
        pagerActiveClass : 'active',
        next : '.next, img',
        prev : '.prev',
        swipe : true
    });
  },

  render: function () {
    var headline;
    var content;
    var slideshow;
    if(this.props.context === "enterprise") {
      headline = 
        "1000s of lease comps per market"
      content = 
        <p>Explore market and submarket trends for rents, concessions, lease terms, and more. Build better models. Make better investment and asset decisions.</p>
      slideshow =
        <div className="slideshow">
          <img src="/images/ui-coverage-ny.png"/>
          <img src="/images/ui-coverage-chi.png"/>
          <img src="/images/ui-coverage-dc.png"/>
          <img src="/images/ui-coverage-dallas.png"/>
          <img src="/images/ui-coverage-bay.png"/>
        </div>
    } else if(this.props.context === "exchange") {
      headline = 
        "Thousands of lease comps in your city"
      content = 
        <p>Gain market knowledge, secure clients and close deals faster with immediate access to actual rents and concessions.</p>
      slideshow =
        <div className="slideshow">
          <img src="/images/ex-ui-coverage-ny.png"/>
          <img src="/images/ex-ui-coverage-chi.png"/>
          <img src="/images/ex-ui-coverage-dc.png"/>
          <img src="/images/ex-ui-coverage-dallas.png"/>
          <img src="/images/ex-ui-coverage-bay.png"/>
        </div>
    }
    return (
      <section id="coverage" className={classnames({
        'ui-block': true,
        'national-coverage': true,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false,
      })}>
        <div className="container push-right">
          <div className="row">
            <div className="col six left screenshot">
              <div className="screenshot-wrap">
                {slideshow}
              </div>
              <ul className="pager"></ul>
            </div>
            <div className="col six right block-info">
              <div>
                <h5 className="section-header">National Coverage</h5>
                <h3 className="h1">{headline}</h3>
                <p>{content}</p>
                <ul className="numbers">
                  <li><span className="number">3,500,000,000</span> SqFt Indexed</li>
                  <li><span className="number">50,000</span> Buildings Covered</li>
                  <li><span className="number">200,000</span> Leases Recorded</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = NationalCoverage;