'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var DemoEmailForm = require('../components/DemoEmailForm.jsx');
var Link = Router.Link;

var TopSplash = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    var loopingVideo;
    if(!this.props.videoPlaying) {
      loopingVideo = 
        <video preload="auto" autoPlay loop muted className="enterprise_video ui" poster="/images/video_poster.png">
          <source src="https://s3.amazonaws.com/compstak/static/landing_pages/enterprise.mp4" type="video/mp4" />
        </video> 
    }
    return (
      <div className="dark-blue top-splash">
        <div className="container">
          <h1>Commercial Lease Comps On Demand</h1>
          <h2 className="h4 blue">Verified Lease Data & Market Analytics For Major Markets Nationwide</h2>
          <DemoEmailForm />
          <div className="splash-ui">
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
            <div className="laptop"></div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TopSplash;