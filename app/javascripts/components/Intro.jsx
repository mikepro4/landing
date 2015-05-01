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
          })
          break
        case "exchange":
          this.setState({
            sectionHeader: null,
          })
          break  
    }
  },

  render: function () {
    var headline;
    var content;
    if(this.props.context === "enterprise") {
      screenshot = 
        <img src="/images/ent-intro-screenshot.png"/>
      headline = 
        <h3 className="h1">Office, retail & industrial lease comps</h3>;
      content = 
        <p>We collect and verify actual, deal-level transaction records reported directly to us by brokers on the ground. Our comps are recent, accurate and searchable.</p>
    } else if(this.props.context === "exchange") {
      screenshot = 
        <img src="/images/ex-intro-screenshot.png"/>
      headline = 
        <h3 className="h1">Thousands of office, retail, and industrial lease comps</h3>;
      content = 
        <div>
          <p>Brokers, appraisers and researchers use CompStak Exchange to trade actual, deal-level transaction records.</p>
          <p>CompStak can complement your existing database, or fully replace it.</p>
          <p>Our comps are: <b>Recent</b>, <b>accurate</b>, <b>searchable</b> and <b>100% free</b>.</p>
        </div>
    }
    return (
      <section className={classnames({
        'ui-block': true,
        'intro': true,
        'enterprise': (this.props.context == "enterprise") ? true : false,
        'exchange': (this.props.context == "exchange") ? true : false,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false,
      })}>
        <div className="container push-left">
          <div className="row">
            <div className="col six right screenshot">
              <div className="screenshot-wrap">
                {screenshot}
              </div>
            </div>
            <div className="col six left block-info">
              <div>
                <h5 className={classnames({
                  'section-header': true,
                  'hidden': _.isEmpty(this.state.sectionHeader) ? true : false
                })}>{this.state.sectionHeader}</h5>
                {headline}
                {content}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = EntIntro;