'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

if(process.browser) {
  require('jquery-cycle2');
}

var Testimonials = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
    }
  },

  componentDidMount: function() {
    $('.slideshow').cycle({
        speed: 500,
        manualSpeed: 500,
        next : '.next',
        prev : '.prev',
        swipe : true
    });
  },

  render: function () {
    return (
      <section className={classnames({
        'testimonials': true,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false,
      })}>
        <ul className="slideshow">
          <li>
            <p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p>
            <span></span>
          </li>
          <li>
            <p>Another Quote</p>
            <span></span>
          </li>
        </ul>
        <div className="next blue">Next</div>
      </section>
    )
  }
});

module.exports = Testimonials;