'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');

var Link = Router.Link;

var NationalCoverage = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  componentDidMount: function () {
  },

  render: function () {
    return (
      <section id="coverage" className="ui-block national-coverage">
        <div className="container push-right">
          <div className="row">
            <div className="col six left screenshot">
              <img src="/images/ui-coverage-ny.png"/>
              <img src="/images/ui-coverage-dallas.png"/>
              <img src="/images/ui-coverage-chi.png"/>
              <img src="/images/ui-coverage-bay.png"/>
              <img src="/images/ui-coverage-dc.png"/>
            </div>
            <div className="col six right block-info">
              <div>
                <h5 className="section-header">National Coverage</h5>
                <h3 className="h1">1000s of lease comps per market</h3>
                <p>Explore market and submarket trends for rents, concessions, terms and more. Build better models, make better investment and asset decisions.</p>
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