'use strict';
var React = require('react');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');

var Testimonials = React.createClass({
  getInitialState: function() {
    return {
      init: false,
      scrollTop: null,
      quotes: [
        // Last one must be first
        {
          text: "CompStak is my go to resource...complete data on lease comparables and is thorough in maintaining their database.",
          name: "Scott Amoson",
          company: "Colliers International"
        },
        {
          text: "My valuation teams are continually surprised by both the amount and quality of data available on CompStak Exchange in the Chicagoland area.",
          name: "Brandon Nunnink",
          company: "Integra Realty Resources"
        },
        {
          text: "CompStak's data is so good that I literally save my clients money on EVERY deal since I started using it.",
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
          text: "Not a day goes by where CompStak isn’t being utilized by our office. CompStak helps to better service our clients, making our brokers more productive.",
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
          text: "I combine CompStak with other research methods for almost every appraisal now...gives me the quantitative ammunition to go with my qualitative insight.",
          name: "Nathaniel Stubblefield",
          company: "Valbridge Property Advisors"
        },
        {
          text: "CompStak has been instrumental in my business development by providing confirmation of critical tenant information. ",
          name: "Wes McGowan",
          company: "Colliers International"
        },
        {
          text: "In our industry, information is king and CompStak has put that right at our fingertips...If you’re not using it, you’re a step behind the rest of us.",
          name: "Tenant Rep Broker",
          company: "Chicago"
        },
        {
          text: "The data quality on CompStak Exchange exceeds that of any other source out there. Comps have actual starting rents and concessions.",
          name: "Matt Currie",
          company: "CM Commercial"
        },
        {
          text: "CompStak is on the bleeding edge of bringing big data and scale in an innovative way to help our clients get better deals all across the country.",
          name: "David Bergeron",
          company: "T3 Advisors"
        },
        {
          text: "CompStak is an extremely valuable resource for valuation professionals due to the reliability of data and ease of use. The excellent Customer service also makes this a company I can get behind.",
          name: "Brian Spohr",
          company: "Valbridge Property Advisors"
        },
        {
          text: "CompStak has been a godsend... fills the gap that existed previously because no other platform really focused on lease comps.",
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
        },
        {
          text: "CompStak has proven to be an invaluable research tool for me over the last couple years. The information is reliable and fresh, and the crowd sourced format is novel concept that has been a huge benefit to my research efforts.",
          name: "Research Manager",
          company: "San Francisco"
        }
      ]
    }
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.onScroll, false);
    this.onScroll();
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.onScroll, false);
  },

  onScroll: function() {
    this.setState({
      scrollTop: $(window).scrollTop()
    })
  },
  
  componentDidUpdate: function() {
    var testimonials = $('section.testimonials');
    if(this.state.scrollTop + ($(window).height() - 50) > testimonials.offset().top) {
      if(!this.state.init) this.startCycle()
    }
  },

  startCycle: function() {
    $('.testimonials-block').cycle({
      speed: 300,
      timeout: 5000,
      fx: 'carousel',
      carouselFluid: true,
      carouselVisible : 3,
      manualSpeed: 500,
      next : '.next-arrow',
      prev : '.prev-arrow',
      slides : '.slide',
      swipe : true,
      slideActiveClass : 'active',
      allowWrap: false
    }); 
    this.setState({
      init: true
    })
  },

  render: function() {
    var quotes = this.state.quotes.map(function (quote, i) {
      return (
        <div className="slide" key={i}>
          <div className="quote">{quote.text}</div>
          <div className="quote-info">
            <p className="h6 blue name">{quote.name}</p>
            <p className="company">{quote.company}</p>
          </div>
        </div>
      );
    }.bind(this));

    return (
      <section className={classnames({
        'testimonials':   true
      }, this.props.className)}>
        <div className="testimonials-wrap">
          <div className="quotes">”</div>
          <div className="testimonials-block">
            {quotes}
          </div>
          <div className="controls">
            <div className="prev-arrow"><Icons type="left_arrow_circled"/></div>
            <div className="next-arrow"><Icons type="right_arrow_circled"/></div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = Testimonials;