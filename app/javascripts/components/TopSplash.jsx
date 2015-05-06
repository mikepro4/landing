'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var DemoEmailForm = require('../components/DemoEmailForm.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var TopSplash = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      mainHeadline: null,
      subHeadline: null
    }
  },

  componentDidMount: function() {
     if(this.context.router.getCurrentQuery().playVideo && this.isMounted()) {
        this.props.toggleVideoModal();
     }

     this.setHeadlines();
  },

  setHeadlines: function() {
    switch(this.props.context) {
      case "enterprise":
        this.setState({
          mainHeadline: "Commercial Lease Comps On Demand",
          subHeadline: "Verified Lease Data & Market Analytics for Major Markets Nationwide"
        })
        break
      case "exchange":
        this.setState({
          mainHeadline: "Trade the comps you have. Find the comps you need. ",
          subHeadline: "A free lease comp exchange for CRE brokers, appraisers and researchers."
        })
        break  
    }
  },

  getVideo: function() {
    if(!this.props.videoPlaying) {
      switch(this.props.context) {
        case "enterprise":
          return (
            <video preload="auto" autoPlay loop muted className="enterprise_video" controls= "false" poster="/images/video_poster.png">
              <source src="https://s3.amazonaws.com/compstak/static/landing_pages/enterprise.mp4" type="video/mp4" />
            </video>
          )
        case "exchange":
          return (
            <video preload="auto" autoPlay loop muted className="exchange_video" controls= "false" poster="/images/video_poster.png">
              <source src="https://s3.amazonaws.com/compstak/static/landing_pages/exchange.mp4" type="video/mp4" />
            </video>
          )
      }
    }
  },  

  getHoverContent: function() {
    switch(this.props.context) {
      case "enterprise":
        return (
          <div className="ui-hover hover-enterprise" onClick={this.props.toggleVideoModal}>
            <div className="play_button">
              <svg  width="69px" height="69px" viewBox="0 0 69 69" >
                  <circle fill="#229CFF" cx="34.1" cy="34.1" r="34.1"/>
                  <polygon fill="#FFFFFF" points="42.8,34.5 29.5,44 29.5,25.1 "/>
              </svg>
            </div>
            <p className="h4">WATCH OUR VIDEO</p>
            <aside>ONLY 60 sec</aside>   
          </div>
        )
      case "exchange":
        return (
          <a href="https://signup.compstak.com/" className="ui-hover hover-exchange" target="_blank">
            <span className="button button-white">JOIN FREE</span>
          </a>
        )
    }
  },

  render: function() {
    return (
      <div className={classnames({
        'top-splash':   true,
        'dark-blue':    (this.props.mode == "dark-blue") ? true : false,
        'black':        (this.props.mode == "black") ? true : false,
        'grey-bg':      (this.props.mode == "grey") ? true : false,
        'blue-bg':      (this.props.mode == "blue") ? true : false,
        'white':        (this.props.mode == "white") ? true : false,
      })}>
        <div className="container fadeIn">

          <h1 className={classnames({
            'h2': (this.props.context == "exchange") ? true : false,
          })}>
            {this.state.mainHeadline}
          </h1>

          <h2 className={classnames({
            'h4': true,
            'blue': (this.props.mode === "dark") ? true : true,
            'hidden': _.isEmpty(this.state.subHeadline) ? true : false
          })}>
            {this.state.subHeadline}
          </h2>

          <DemoEmailForm  {...this.props} />

          <div className="splash-ui">
            <div className="ui">
              {this.getHoverContent()}
              {this.getVideo()}
            </div> 
            <div className="laptop"></div>
          </div>

        </div>
      </div>
    )
  }
});

module.exports = TopSplash;