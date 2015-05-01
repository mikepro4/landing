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
          text: "CompStak is my go to resource...complete data on lease comparables and is thorough in maintaining their database.",
          name: "Scott Amoson",
          company: "Colliers International"
        },
        {
          text: "My valuation teams are continually surprised by both the amount and quality of data available on Compstak Exchange in the Chicagoland area.",
          name: "Brandon Nunnink",
          company: "Integra Realty Resources"
        },
        {
          text: "Compstak's data is so good that I literally save my clients money on EVERY deal since I started using it.",
          name: "Benjamin Osgood",
          company: "Dunhill Partners West"
        },
        {
          text: "I can get lease comps in seconds instead of waiting for other brokers to get back to me. It's a real time saver, and it's free.",
          name: "David Eseke",
          company: "DTZ"
        },
        {
          text: "If CompStak is available in your market, I recommend to become a member as soon as possible. My team and I use it on a daily basis.",
          name: "Terence Kirk",
          company: "Colliers International"
        },
        {
          text: "Knowledge is power and CompStak consistently delivers the information I need to provide my clients with the most accurate and up-to-date market intelligence available today.",
          name: "Jon Olmstead",
          company: "Cresa"
        },
        {
          text: "Not a day goes by where CompStak isn’t being utilized by our office. Compstak helps to better service our clients, making our brokers more productive.",
          name: "Brad Cohen",
          company: "Eastern Consolidated"
        },
        {
          text: "Within seconds of logging on, the easy-to-use platform provides access to a comprehensive list of lease comps.",
          name: "John Obeid",
          company: "Colliers International"
        },
        {
          text: "A truly valuable and innovative resource for today’s commercial real estate professionals.",
          name: "Vathana Duong",
          company: "Colliers International"
        },
        {
          text: "I combine Compstak with other research methods for almost every appraisal now...gives me the quantitative ammunition to go with my qualitative insight.",
          name: "Nathaniel Stubblefield",
          company: "Valbridge Property Advisors"
        },
        {
          text: "CompStak has been instrumental in my business development by providing confirmation of critical tenant information. ",
          name: "Wes McGowan",
          company: "Colliers International"
        },
        {
          text: "In our industry, information is king and Compstak has put that right at our fingertips...If you’re not using it, you’re a step behind the rest of us.",
          name: "Tenant Rep Broker",
          company: "Chicago"
        },
        {
          text: "The data quality on CompStak Exchange exceeds that of any other source out there. Comps have actual starting rents and concessions.",
          name: "Matt Currie",
          company: "CM Commercial"
        },
        {
          text: "Compstak is on the bleeding edge of bringing big data and scale in an innovative way to help our clients get better deals all across the country.",
          name: "David Bergeron",
          company: "T3 Advisors"
        },
        {
          text: "CompStak is an extremely valuable resource for valuation professionals due to the reliability of data and ease of use. The excellent curtomer service also makes this a company I can get behind.",
          name: "Brian Spohr",
          company: "Valbridge Property Advisors"
        },
        {
          text: "Compstak has been a godsend... fills the gap that existed previously because no other platform really focused on lease comps.",
          name: "Bob Gibbons",
          company: "REATA Commercial Realty"
        },
        {
          text: "CompStak enables us to get timely research about tenants and buildings that was not available to us before. I use it daily.",
          name: "Ted Stevens",
          company: "Washington DC"
        },
        {
          text: "CompStak has given me instant access to information that would otherwise take weeks to acquire...a must-have addition to any broker’s tool box.",
          name: "Kevin Winn",
          company: "Denver"
        },
        {
          text: "CompStak has been an extremely valuable resource in my daily work. It helps me provide quicker and better informed valuation services to my clients",
          name: "Russell Robinson",
          company: "RS Weck & Associates"
        },
        {
          text: "CompStak has saved our company so much time over the last few years by providing us access to excellent lease comps.",
          name: "Luis Lobos",
          company: "Magdala Valuation Group"
        },
        {
          text: "CompStak comps have helped me out when I was on a tight deadline. Thank you!",
          name: "Valuation professional",
          company: "San Francisco"
        },
        {
          text: "I use CompStak when I need information immediately.",
          name: "Bradley",
          company: "Atlanta"
        },
        {
          text: "CompStak is the first place I go to when I’m looking for fresh rents for any property type. They have the most current and accurate info available for commercial real estate.",
          name: "Valuation professional",
          company: "Sacramento"
        },
        {
          text: "CompStak is a great resource both to verify my current rental comps information, as well as identify potential new comps",
          name: "Valuation professional",
          company: "Santa Clara"
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
          <div className="quote-info">
            <p className="h6 blue name">{quote.name}</p>
            <p className="company">{quote.company}</p>
          </div>
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
        <div className="controls">
          <div className="prev-arrow"><Icons type="left_arrow_circled"/></div>
          <div className="next-arrow"><Icons type="right_arrow_circled"/></div>
        </div>
      </section>
    )
  }
});

module.exports = Testimonials;