'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
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
    this.contentSwitch();
  },

  contentSwitch: function() {
    switch(this.props.context) {
        case "enterprise":
          this.setState({
            introText: "1000s of comps in most major markets, with new markets launching each quarter."
          })
          break
        case "exchange":
          this.setState({
            introText: "Thousands of comps in most major markets, with new markets launching each quarter."
          })
          break  
    }
  },

  render: function () {
    return (
      <section className="grey-bg coverage-map">
        <div className="container">
          <div className="row">
            <div className="col six right map">
              <img className={classnames({
                'hidden': (this.props.context === "exchange") ? true : false
              })} src="/images/ent-coverage-map.svg"/>
              <img className={classnames({
                'hidden': (this.props.context === "enterprise") ? true : false
              })} src="/images/ex-coverage-map.svg"/>
            </div>
            <div className="col six left block-info">
              <div>
                <h3 className="h1">Rapidly expanding national coverage</h3>
                <p>{this.state.introText}</p>
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
          <div className={classnames({
            'coverage-list': true,
            'hidden': (this.props.context === "exchange") ? true : false
          })}>
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
          <div className={classnames({
            'coverage-links': true,
            'hidden': (this.props.context === "enterprise") ? true : false
          })}>
            <ul>
              <li><a href="#">Atlanta <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Chicago <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Dallas / Fort Worth <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Houston <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Los Angeles <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Minneapolis / St. Paul <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">New York City <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Northern New Jersey <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Sacramento <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">San Fancisco <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Bay Area <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Washington DC <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Denver <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">San Diego <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Austin <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Baltimore <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Boston <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Charlotte <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Jacksonville <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">London <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Miami <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Nashville <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Philadelphia <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Phoenix <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Portland <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Raleigh / Durham <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">San Antonio <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Seattle <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Tampa <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Toronto <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
              <li><a href="#">Westchester <span class="arrow"><Icons type="tiny_right_arrow"/></span></a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = CoverageMap;