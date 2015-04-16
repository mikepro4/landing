'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var CoverageMap = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section className="grey-bg coverage-map">
        <div className="container">
          <div className="row">
            <div className="col six right map">
              <img src="/images/coverage-map.svg"/>
            </div>
            <div className="col six left block-info">
              <div>
                <h3 className="h1">Rapidly expanding national coverage</h3>
                <p>1000s of comps in most major markets, with new markets launching each quarter. </p>
                <div className="key">
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
          <div className="coverage-list">
            <ul className="checklist">
            <li className="active"><Icons type="tick" /> Atlanta</li>
            <li className="active"><Icons type="tick" /> Chicago</li>
            <li className="active"><Icons type="tick" /> Dallas / Fort Worth</li>
            <li className="active"><Icons type="tick" /> Houston</li>
            <li className="active"><Icons type="tick" /> Los Angeles</li>
            <li className="active"><Icons type="tick" /> Minneapolis / St. Paul</li>
            <li className="active"><Icons type="tick" /> New York City</li>
            <li className="active"><Icons type="tick" /> Northern New Jersey</li>
            <li className="active"><Icons type="tick" /> Sacramento</li>
            <li className="active"><Icons type="tick" /> San Fancisco</li>
            <li className="active"><Icons type="tick" /> Bay Area</li>
            <li className="active"><Icons type="tick" /> Washington DC</li>
            <li className="active"><Icons type="tick" /> Denver</li>
            <li className="active"><Icons type="tick" /> San Diego</li>
            <li><Icons type="tick" /> Austin</li>
            <li><Icons type="tick" /> Baltimore</li>
            <li><Icons type="tick" /> Boston</li>
            <li><Icons type="tick" /> Charlotte</li>
            <li><Icons type="tick" /> Jacksonville</li>
            <li><Icons type="tick" /> London</li>
            <li><Icons type="tick" /> Miami</li>
            <li><Icons type="tick" /> Nashville</li>
            <li><Icons type="tick" /> Philadelphia</li>
            <li><Icons type="tick" /> Phoenix</li>
            <li><Icons type="tick" /> Portland</li>
            <li><Icons type="tick" /> Raleigh / Durham</li>
            <li><Icons type="tick" /> San Antonio</li>
            <li><Icons type="tick" /> Seattle</li>
            <li><Icons type="tick" /> Tampa</li>
            <li><Icons type="tick" /> Toronto</li>
            <li><Icons type="tick" /> Westchester</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = CoverageMap;