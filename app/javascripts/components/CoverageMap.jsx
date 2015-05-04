'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var CoverageMap = React.createClass({

  mixins: [ HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      introText: null
    }
  },

  componentDidMount: function() {
  },

  render: function () {
    var mapImage;
    var content;
    var entMarketList;
    var exMarketList;
    if(this.props.context === "enterprise") {
      mapImage = 
        <img src="/images/ent-coverage-map.svg"/>
      content = 
        "1000s of lease comps in most major markets, with new markets launching each quarter."
      entMarketList = 
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
    } else if(this.props.context === "exchange") {
      mapImage = 
        <img src="/images/ex-coverage-map.svg"/>
      content = 
        "Thousands of comps in most major markets, with new markets launching each quarter."
      exMarketList =
        <div>
          <h5 className="coverage-links-header">Choose Your Market to Get Started</h5>
          <div className="coverage-links">        
            <ul>
              <li><a href="#">Atlanta <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Chicago <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Dallas / Fort Worth <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Houston <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Los Angeles <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Minneapolis / St. Paul <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">New York City <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Northern New Jersey <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Sacramento <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">San Fancisco <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Bay Area <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Washington DC <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Denver <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">San Diego <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Austin <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Baltimore <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Boston <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Charlotte <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Jacksonville <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">London <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Miami <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Nashville <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Philadelphia <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Phoenix <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Portland <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Raleigh / Durham <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">San Antonio <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Seattle <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Tampa <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Toronto <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Westchester <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Your city! <span className="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
            </ul>
          </div>
        </div>
    }
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
              {mapImage}
            </div>
            <div className="col six left block-info">
              <div>
                <h3 className="h1">Rapidly expanding national coverage</h3>
                <p>{content}</p>
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
          {entMarketList}
          {exMarketList}
        </div>
      </section>
    )
  }
});

module.exports = CoverageMap;