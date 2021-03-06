'use strict';
var React = require('react');
var _ = require('underscore');
var classnames = require('classnames');

var EntIntro = React.createClass({

  getHeadline: function() {
    switch(this.props.context) {
      case "enterprise":
        return "Office, retail & industrial comps"
      case "exchange":
        return "Thousands of office, retail, and industrial lease comps"
    }
  },

  getScreenshot: function() {
    switch(this.props.context) {
      case "enterprise":
        return <img src="/images/ent-intro-screenshot.png"/>
      case "exchange":
        return <img src="/images/ex-intro-screenshot.png"/>
    }
  },

  getContent: function() {
    switch(this.props.context) {
      case "enterprise":
        return (
          <div>
            <p>We collect and verify actual, deal-level transaction records reported directly to us by brokers on the ground.</p>
            <p>We combine those records with critical property-level details, leaving you with lease and property comps that are recent, accurate, and searchable.</p>
          </div>
        )
      case "exchange":
        return (
          <div>
            <p>Brokers, appraisers, and researchers use CompStak Exchange to trade actual, deal-level transaction records.</p>
            <p>CompStak can complement your existing database or fully replace it.</p>
            <p>Our comps are: <b>recent</b>, <b>accurate</b>, <b>searchable</b>, and <b>100% free</b>.</p>
          </div>
        )
    }
  },

  render: function() {
    return (
      <section className={classnames({
        'ui-block':     true,
        'intro':        true
      }, this.props.className)}>
        <div className="container push-left">
          <div className="row">
            <div className="col six right screenshot">
              <div className="screenshot-wrap">
                {this.getScreenshot()}
              </div>
            </div>
            <div className="col six left block-info">
              <div>
                <h5 className="section-header">CompStak Comps</h5>
                <h3 className="h1">{this.getHeadline()}</h3>
                {this.getContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = EntIntro;