'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

if(process.browser) {
  var key = require('keymaster');
}

var VideoModal = React.createClass({

  closeVideoModal: function() {
    if(this.props.videoPlaying) {
      this.props.toggleVideoModal()
    }
  },

  componentDidMount: function() {
    key('esc', this.closeVideoModal);
  },

  componentWillUnmount: function() {
    key.unbind('esc', this.closeVideoModal);
  },

  render: function () {
    var video;
    if(this.props.videoPlaying) {
      video = 
          <iframe src="https://player.vimeo.com/video/121464719?autoplay=1&title=0&byline=0&portrait=0" frameBorder="0"></iframe> 
    }
    return (
      <div className={classnames({
          'video-modal':   true,
          'visible':       this.props.videoPlaying
      })}>
        <div className="video_container" onClick={this.props.toggleVideoModal}>
          <div className="video fadeIn">
            <i className="close-icon" onClick={this.props.toggleVideoModal}><Icons type="cross_circle"/></i>
            {video}
            <Link className="button button-hollow" to="demo-request">Schedule a Demo</Link>
          </div> 
        </div>
      </div>
    )
  }
});

module.exports = VideoModal;