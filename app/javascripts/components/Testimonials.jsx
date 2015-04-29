'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');
var Link = Router.Link;

var Testimonials = React.createClass({
  render: function () {
    return (
      <section className="testimonials black">
        <ul>
          <li>
            <p>Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help T3's clients get better deals all across the country.</p>
            <span></span>
          </li>
        </ul>
      </section>
    )
  }
});

module.exports = Testimonials;