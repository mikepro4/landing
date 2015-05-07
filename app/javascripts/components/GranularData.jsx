'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var EntGranularData = React.createClass({

  getScreenshot: function() {
    switch(this.props.context) {
      case "enterprise":
        return <img src="/images/ent-granular-screenshot.png"/>
      case "exchange":
        return <img src="/images/ex-granular-screenshot.png"/>
    }
  },

  getBulletPoints: function() {
    switch(this.props.context) {
      case "enterprise": 
        return (
          <ul className="checklist">
            <li><Icons type="tick" /><span> Actual Transaction Data</span></li>
            <li><Icons type="tick" /><span> Accurate & Detailed</span></li>
            <li><Icons type="tick" /><span> Instantly Searchable</span></li>
            <li><Icons type="tick" /><span> Lease & Property Information</span></li>
          </ul>
        )
      case "exchange": 
        return (
          <ul className="checklist">
            <li><Icons type="tick" /><span> Actual Transaction Data</span></li>
            <li><Icons type="tick" /><span> Accurate & Detailed</span></li>
            <li><Icons type="tick" /><span> Instantly Searchable</span></li>
          </ul>
        )
    }
  },

  render: function () {
    return (
      <section className={classnames({
        'ui-block':       true,
        'granular-data':  true
      }, this.props.className)}>
        <div className="container push-right">
          <div className="row">
            <div className="col six left screenshot">
              <div className="screenshot-wrap">
                {this.getScreenshot()}
                <div className="granular-animation">
                  <div className="header"></div>
                  <div className="list"></div>
                  <div className="scrollbar"><span></span></div>
                </div>
              </div>
            </div>
            <div className="col six right block-info">
              <div>
                <h5 className="section-header">Detailed Comps</h5>
                <h3 className="h1">Granular, accurate, deal-level lease data</h3>
                {this.getBulletPoints()}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = EntGranularData;