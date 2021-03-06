'use strict';
var React = require('react');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');

var NationalCoverage = React.createClass({

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

  getHeadline: function() {
    switch(this.props.context) {
      case "enterprise":
        return "1000s of lease comps per market"
      case "exchange":
        return "Thousands of lease comps in your city"
    }
  },

  getContent: function() {
    switch(this.props.context) {
      case "enterprise":
        return <p>
          Explore market and submarket trends for rents, concessions, lease terms, and more. 
          Build better models. Make better investment and asset decisions.
        </p>
      case "exchange":
        return <p>
          Gain market knowledge, secure clients, and close deals faster with immediate access to actual rents and concessions.
        </p>
    }
  },

  getSlideshow: function() {
    switch(this.props.context) {
      case "enterprise":
        return <div className="slideshow">
          <img src="/images/ui-coverage-ny.png"/>
          <img src="/images/ui-coverage-chi.png"/>
          <img src="/images/ui-coverage-dc.png"/>
          <img src="/images/ui-coverage-dallas.png"/>
          <img src="/images/ui-coverage-bay.png"/>
        </div>
      case "exchange":
        return  <div className="slideshow">
          <img src="/images/ex-ui-coverage-ny.png"/>
          <img src="/images/ex-ui-coverage-chi.png"/>
          <img src="/images/ex-ui-coverage-dc.png"/>
          <img src="/images/ex-ui-coverage-dallas.png"/>
          <img src="/images/ex-ui-coverage-bay.png"/>
        </div>
    }
  },

  render: function() {
    return (
      <section id="coverage" className={classnames({
        'ui-block':           true,
        'national-coverage':  true
      }, this.props.className)}>
        <div className="container push-right">
          <div className="row">
            <div className="col six left screenshot">
              <div className="screenshot-wrap">
                {this.getSlideshow()}
              </div>
              <ul className="pager"></ul>
            </div>
            <div className="col six right block-info">
              <div>
                <h5 className="section-header">National Coverage</h5>
                <h3 className="h1">{this.getHeadline()}</h3>
                <p>{this.getContent()}</p>
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