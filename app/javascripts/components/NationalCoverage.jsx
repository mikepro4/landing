'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Link = Router.Link;

var NationalCoverage = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section className="enterprise-intro grey-bg">
        <div className="container">
          <div className="row">
            <div className="col six right block-info">
              <h3 className="h1">1000s of lease comps per market</h3>
              <p>Explore market and submarket trends for rents, concessions, terms and more. Build better models, make better investment and asset decisions.</p>
            </div>
            <div className="col six right screenshot">
              <img src="http://placehold.it/900x600"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = NationalCoverage;