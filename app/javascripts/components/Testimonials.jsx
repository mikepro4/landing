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
        speed: 500,
        manualSpeed: 500,
        pager : '.pager2',
        pagerTemplate : '<li><span>•</span></li>',
        pagerActiveClass : 'active',
        next : '.next',
        prev : '.prev',
        slides : '> li',
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
        'white': (this.props.mode == "white") ? true : false
      })}>
        <ul className="testimonials-block">
          <li>luqrglajhd</li>
          <li>slide 2</li>
        </ul>
        <ul className="pager2"></ul>
      </section>
    )
  }
});

module.exports = Testimonials;