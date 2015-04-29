'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var DemoEmailForm = require('../components/DemoEmailForm.jsx');
var _ = require('underscore');
var Link = Router.Link;
var classnames = require('classnames');

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
            subHeadline: "Verified Lease Data & Market Analytics For Major Markets Nationwide"
          })
          break
        case "exchange":
          this.setState({
            mainHeadline: "Trade the comps you have. Find the comps you need. ",
            subHeadline: ""
          })
          break  
    }
  },

  render: function () {
    var loopingVideo;
    if(!this.props.videoPlaying) {
      loopingVideo = 
        <video preload="auto" autoPlay loop muted className="enterprise_video" controls= "false" poster="/images/video_poster.png">
          <source src="https://s3.amazonaws.com/compstak/static/landing_pages/enterprise.mp4" type="video/mp4" />
        </video> 
    }
    return (
      <div className={classnames({
        'top-splash': true,
        'dark-blue': (this.props.mode == "dark") ? true : false,
        'light': (this.props.mode == "light") ? true : false
      })}>
        <div className="container">
          <h1 className={classnames({
            'fadeIn': true,
            'hidden': (this.props.context == "exchange") ? true : false
          })}>Commercial Lease Comps On Demand</h1>
          <h1 className={classnames({
            'fadeIn': true,
            'h2': true,
            'hidden': (this.props.context == "enterprise") ? true : false
          })}>Trade the comps you have. Find the comps you need.</h1>
          <h2 className={classnames({
            'fadeIn': true,
            'h4': true,
            'blue': (this.props.mode === "dark") ? true : true,
            'hidden': _.isEmpty(this.state.subHeadline) ? true : false
          })}>{this.state.subHeadline}</h2>
          <div className="fadeIn"> <DemoEmailForm /> </div>
          <div className="fadeIn splash-ui">
            <div className="ui">
              <div className="ui-hover" onClick={this.props.toggleVideoModal}>
                <div className="play_button">
                  <svg  width="69px" height="69px" viewBox="0 0 69 69" >
                      <circle fill="#229CFF" cx="34.1" cy="34.1" r="34.1"/>
                      <polygon fill="#FFFFFF" points="42.8,34.5 29.5,44 29.5,25.1     "/>
                  </svg>
                </div>
                <p className="h4">WATCH OUR VIDEO</p>
                <aside>ONLY 60 sec</aside>   
              </div>
              {loopingVideo}
            </div> 
            <div className="laptop"></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TopSplash;