'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var EntIntro = React.createClass({

  mixins: [ HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      sectionHeader: null,
      headline: null
    }
  },

  componentDidMount: function() {
    this.pageIntro();
  },

  pageIntro: function() {
    switch(this.props.context) {
        case "enterprise":
          this.setState({
            sectionHeader: "CompStak Comps",
            headline: "Office, retail & industrial lease comps",
          })
          break
        case "exchange":
          this.setState({
            sectionHeader: null,
            headline: "Thousands of office, retail, and industrial lease comps",
          })
          break  
    }
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
                <h5 className={classnames({
                  'section-header': true,
                  'hidden': _.isEmpty(this.state.sectionHeader) ? true : false
                })}>{this.state.sectionHeader}</h5>
                <h3 className="h1">{this.state.headline}</h3>
                <div className={classnames({
                  'hidden': (this.props.context === "exchange") ? true : false
                })}>
                  <p>We collect and verify actual, deal-level transaction records reported directly to us by brokers on the ground. Our comps are recent, accurate and searchable.</p>
                </div>
                <div className={classnames({
                  'hidden': (this.props.context === "enterprise") ? true : false
                })}>
                  <p>Brokers, appraisers and researchers use CompStak Exchange to trade actual, deal-level transaction records.</p>
                  <p>CompStak can complement your existing database, or fully replace it.</p>
                  <p>Our comps are: <b>Recent</b>, <b>accurate</b>, <b>searchable</b> and <b>100% free</b>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = EntIntro;