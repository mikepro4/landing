'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var CoverageMap = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      introText: null,
      allMarkets: [],
      activeMarkets: [],
      launchingMarkets: []
    }
  },

  componentDidMount: function() {
    this.loadMarkets();
  },
  
  loadMarkets: function() {
    $.ajax({
      url: '/api/markets/all',
      dataType: 'json',
      success: function(data) {
        var allMarkets = _.sortBy(data, 'displayName');
        this.setState({
          allMarkets: allMarkets,
          activeMarkets: _.where(allMarkets, {publiclyAvailable: true}),
          launchingMarkets: _.where(allMarkets, {publiclyAvailable: false})
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('Markets were not loaded');
      }
    });
  },

  getCoverageMap: function() {
    switch(this.props.context) {
      case "enterprise":
        return (<img src="/images/ent-coverage-map.svg"/>)
      case "exchange":
        return (<img src="/images/ex-coverage-map.svg"/>)
    }
  },

  getTextContent: function() {
    switch(this.props.context) {
      case "enterprise":
        return ("1000s of comps in most major markets, with new markets launching each quarter.")
      case "exchange":
        return ("Thousands of comps in most major markets, with new markets launching each quarter.")
    }
  },

  getMarketsContent: function() {
    switch(this.props.context) {
      case "enterprise":
        var activeMarkets = this.state.activeMarkets.map(function (market, i) {
          return (
            <li className="active">
              <Icons type="tick" />{market.displayName}
            </li>
          );
        });

        var launchingMarkets = this.state.launchingMarkets.map(function (market, i) {
          return (
            <li>
              <Icons type="tick" />{market.displayName}
            </li>
          );
        });
        return (
          <div className="coverage-list">
            <ul className="checklist">
              {activeMarkets}
              {launchingMarkets}
            </ul>
          </div>
      )
      case "exchange":
        var markets = this.state.allMarkets.map(function (market, i) {
          var marketUrl = "https://signup.compstak.com/" + encodeURIComponent(market.displayName);
          return (
            <li>
              <a href={marketUrl}> {market.displayName} <span className="arrow"><Icons type="tiny_right_arrow"/></span> </a>
            </li>
          );
        }.bind(this));

        return (
          <div>
            <h5 className="coverage-links-header">Choose Your Market to Get Started</h5>
            <div className="coverage-links">        
              <ul>
                {markets}
                <li><a href="#">Your city! <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              </ul>
            </div>
          </div>
        )
    }
  },

  render: function () {
    return (
      <section className={classnames({
        'coverage-map': true,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false,
      })}>
        <div className="container">
          <div className="row">
            <div className="col six right map">
              {this.getCoverageMap()}
            </div>
            <div className="col six left block-info">
              <div>
                <h3 className="h1">Rapidly expanding national coverage</h3>
                <p>{this.getTextContent()}</p>
                <div className={classnames({
                  'key': true,
                  'hidden': (this.props.context == "exchange") ? true : false
                })}>
                  <div className="active">
                    <span className="icon"><Icons type="filled_tick" /></span> Active Markets
                  </div>
                  <div>
                    <span className="inactive"></span> Launching Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.getMarketsContent()}
        </div>
      </section>
    )
  }
});

module.exports = CoverageMap;