'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var Testimonials = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount: function() {
    $('.testimonials-block').cycle({
        speed: 0,
        fx: 'carousel',
        carouselFluid: true,
        carouselVisible : 3,
        manualSpeed: 500,
        next : '.next-arrow',
        prev : '.prev-arrow',
        slides : '> li',
        swipe : true
        //slide-active-class : 'active'
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
        'white': (this.props.mode == "white") ? true : false
      })}>
        <ul className="testimonials-block">
          <li><p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p></li>
          <li><p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p></li>
          <li><p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p></li>
          <li><p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p></li>
          <li><p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p></li>
          <li><p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p></li>
          <li><p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p></li>
          <li><p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p></li>
        </ul>

        <div className="prev-arrow">Prev</div>
        <div className="next-arrow">Next</div>
      </section>
    )
  }
});

module.exports = Testimonials;