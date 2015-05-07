'use strict';
var React = require('react');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');

var HowItWorks = React.createClass({
  render: function () {
    return (
      <section id="how-it-works" className={classnames({
        'ui-block':      true,
        'how-it-works':  true
      }, this.props.className)}>
        <div className="container push-left">
          <div className="row">
            <div className="col six right screenshot">
              <div className="screenshot-wrap">
                <img src="/images/how-it-works.svg"/>
              </div>
            </div>
            <div className="col six left block-info">
              <div>
                <h5 className="section-header">How It Works</h5>
                <h3 className="h1">Trade the comps you have. Find the comps you need.</h3>
                <p>CompStak Exchange is a private professional network. Anonymously trade commercial lease comps with thousands of brokers, appraisers, and researchers.</p>
                <ul className="checklist">
                  <li><Icons type="tick" /><span> Verified CRE professionals only</span></li>
                  <li><Icons type="tick" /><span> Trade 1–for–1: Give a comp. Get a comp</span></li>
                  <li><Icons type="tick" /><span> Remain completely anonymous</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = HowItWorks;