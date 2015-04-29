'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var EntGranularData = React.createClass({

  mixins: [ HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
    }
  },

  componentDidMount: function() {
  },

  render: function () {
    var headline;
    var content;
    var sectionHeader;
    if(this.props.context === "enterprise") {
      sectionHeader = ""
      headline = 
        <h3 className="h1">Granular, accurate, deal-level lease data</h3>;
      content = 
        <ul className="checklist">
          <li><Icons type="tick" /><span> Actual Transaction Data</span></li>
          <li><Icons type="tick" /><span> Accurate & Detailed</span></li>
          <li><Icons type="tick" /><span> Inifinitely & Instantly Searchable</span></li>
          <li><Icons type="tick" /><span> Lease & Property Information</span></li>
        </ul>
    } else if(this.props.context === "exchange") {
      sectionHeader = 
        <h5 className="section-header">Detailed Comps</h5>
      headline = 
        <h3 className="h1">Granular, accurate, deal-level lease data</h3>;
      content = 
        <ul className="checklist">
          <li><Icons type="tick" /><span> Actual Transaction Data</span></li>
          <li><Icons type="tick" /><span> Accurate & Detailed</span></li>
          <li><Icons type="tick" /><span> Instantly Searchable</span></li>
        </ul>
    }
    return (
      <section className={classnames({
        'ui-block': true,
        'granular-data': true,
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
                <img src="/images/ent-granular-screenshot.png"/>
                <div className="granular-animation">
                  <div className="header"></div>
                  <div className="list"></div>
                  <div className="scrollbar"><span></span></div>
                </div>
              </div>
            </div>
            <div className="col six right block-info">
              <div>
                {sectionHeader}
                <h3 className="h1">{headline}</h3>
                {content}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = EntGranularData;