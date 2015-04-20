'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Link = Router.Link;

var EntIntro = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section className="ui-block grey-bg enterprise-intro">
        <div className="container push-left">
          <div className="row">
            <div className="col six right screenshot">
              <div className="screenshot-wrap">
                <img src="/images/ent-intro-screenshot.png"/>
              </div>
            </div>
            <div className="col six left block-info">
              <div>
                <h5 className="section-header">CompStak Comps</h5>
                <h3 className="h1">Office, retail & industrial lease comps.</h3>
                <p>We collect and verify actual, deal-level transaction records reported directly to us by brokers on the ground. Our comps are recent, accurate and searchable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = EntIntro;