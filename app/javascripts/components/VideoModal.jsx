'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');
var Link = Router.Link;

var VideoModal = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  render: function () {
    var video;
    if(this.props.videoPlaying) {
      video = 
          <iframe src="https://player.vimeo.com/video/121464719?autoplay=1&title=0&byline=0&portrait=0" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
    }
    return (
      <div className={classnames({
          'video-modal':   true,
          'visible':       this.props.videoPlaying
      })}>
        <i className="close-icon" onClick={this.props.toggleVideoModal}><Icons type="cross"/></i>
        <div className="video_container">
          {video}
        </div>
      </div>
    )
  }
});

module.exports = VideoModal;