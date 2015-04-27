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
      sectionHeader: null
    }
  },

  componentDidMount: function() {
    this.pageIntro();
  },

  pageIntro: function() {
    switch(this.props.context) {
        case "enterprise":
          this.setState({
            sectionHeader: "CompStak Comps"
          })
          break
        case "exchange":
          this.setState({
            sectionHeader: null
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