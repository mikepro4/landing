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
      sectionHeader: null,
      searchableListItem: null,
      propertyInfoListItem: null
    }
  },

  componentDidMount: function() {
    this.granularDataInfo();
  },

  granularDataInfo: function() {
    switch(this.props.context) {
        case "enterprise":
          this.setState({
            sectionHeader: "",
            searchableListItem: "Inifinitely & Instantly Searchable",
            propertyInfoListItem: "Lease & Property Information"
          })
          break
        case "exchange":
          this.setState({
            sectionHeader: "Detailed Comps",
            searchableListItem: "Instantly Searchable",
            propertyInfoListItem: ""
          })
          break  
    }
  },

  render: function () {
    return (
      <section className="ui-block granular-data">
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
                <h5 className={classnames({
                  'section-header': true,
                  'hidden': _.isEmpty(this.state.sectionHeader) ? true : false
                })}>{this.state.sectionHeader}</h5>
                <h3 className="h1">Granular, accurate, deal-level lease data</h3>
                <ul className="checklist">
                  <li><Icons type="tick" /><span> Actual Transaction Data</span></li>
                  <li><Icons type="tick" /><span> Accurate & Detailed</span></li>
                  <li><Icons type="tick" /><span> {this.state.searchableListItem}</span></li>
                  <li className={classnames({
                    'hidden': _.isEmpty(this.state.propertyInfoListItem) ? true : false
                  })}><Icons type="tick" /><span> {this.state.propertyInfoListItem}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = EntGranularData;