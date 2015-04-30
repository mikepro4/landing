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


  getInitialState: function() {
    return {
      quotes: [
        {
          text: 'CompStak is my go to resource... complete data on lease comparables and is thorough in maintaining their database.',
          person: 'Scott Amoson',
          company: 'Colliers International'
        },
        {
          text: 'My valuation teams are continually surprised by both the amount and quality of data available on Compstak Exchange in the Chicagoland area.',
          person: 'Brandon Nunnink',
          company: 'Integra Realty Resources'
        },
        {
          text: 'Message 3',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 1',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 2',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 3',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 1',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 2',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 3',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 1',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 2',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 3',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 1',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 2',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 3',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 1',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 2',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 3',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 1',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 2',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 3',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 1',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 2',
          person: 'title',
          company: 'position'
        },
        {
          text: 'Message 3',
          person: 'title',
          company: 'position'
        }
      ]
    }
  },

  componentDidMount: function() {
    $('.testimonials-block').cycle({
        speed: 500,
        timeout: 0,
        fx: 'carousel',
        carouselFluid: true,
        carouselVisible : 3,
        manualSpeed: 500,
        next : '.next-arrow',
        prev : '.prev-arrow',
        slides : '.slide',
        swipe : true,
        slideActiveClass : 'active'
    });
  },

  render: function () {

    var quotes = this.state.quotes.map(function (quote, i) {
      return (
        <div className="slide">
          <p>{quote.text}</p>
          <p>{quote.person}</p>
          <p>{quote.company}</p>
        </div>
      );
    }.bind(this));

    return (
      <section className={classnames({
        'testimonials': true,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false
      })}>

        <div className="quotes">”</div>
        <div className="testimonials-block">
          {quotes}
        </div>

        <div className="prev-arrow">Prev</div>
        <div className="next-arrow">Next</div>
      </section>
    )
  }
});

module.exports = Testimonials;