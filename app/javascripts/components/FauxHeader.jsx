'use strict';
var React = require('react');
var Router = require('react-router');
var _ = require('underscore');
var classnames = require('classnames');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var FauxHeader = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      pages: {
        enterprise: this.context.router.isActive('enterprise'),
        exchange: this.context.router.isActive('exchange'),
        legal: this.context.router.isActive('legal')
      },
      scrollTop: $(window).scrollTop()
    }
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.onScroll, false);
    this.initialScrollToElement();
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.onScroll, false);
  },

  componentWillReceiveProps: function() {
    this.initialScrollToElement();
  },

  initialScrollToElement: function() {
    var element = this.context.router.getCurrentQuery().scrollTo;
    _.delay(function(){
      if(element){
        this.scrollPage('#' + element);
        this.context.router.replaceWith(this.context.router.getCurrentPathname());
      }
    }.bind(this), 400)
  },

  scrollToElement: function(e) {
    e.preventDefault();
    var destination = $(e.target).attr('href');
    this.scrollPage(destination);
  },

  scrollPage: function(destination) {
    var scrollTop;
    if($(destination).offset().top < 300) {
      scrollTop = $(destination).offset().top
    } else {
      scrollTop = $(destination).offset().top - $('header').height()
    }

    $('html, body').animate({
      scrollTop: scrollTop
    }, 750);
  },

  scrollToTop: function() {
    $('html, body').animate({ scrollTop: 0 }, 750);
  },

  onScroll: function () {
    var headerHeight = $('header').height() + 10;
    var scrollTop;

    this.setState({
      scrollTop: $(window).scrollTop()
    }, function() {
      scrollTop = this.state.scrollTop
    })

    $('section').each(function() {
      var id = $(this).attr('id');
      var element = $('a[href="#'+id+'"]').parent('li');
      
      if(scrollTop + ($(window).height() - 100) > $(this).offset().top) {
        $(this).addClass('visible');
      }

      if(scrollTop + headerHeight > $(this).offset().top && 
         scrollTop + headerHeight <= $(this).offset().top + $(this).height()) {
        element.addClass('active');
      } else {
        element.removeClass('active');
      } 
    });
  },

  getHeaderLinks: function() {
    if(this.state.pages.enterprise) {
      return (
        <ul>
          <li><a href="#sample-comp" onClick={this.scrollToElement}>CompStak Comps</a></li>
          <li><a href="#coverage" onClick={this.scrollToElement}>National Coverage</a></li>
        </ul>
      )
    } else if(this.state.pages.legal) {
      return (
        <ul>
          <li><a href="#TermsOfUse" onClick={this.scrollToElement}>Terms Of Use</a></li>
          <li><a href="#PrivacyPolicy" onClick={this.scrollToElement}>Privacy Policy</a></li>
          <li><a href="#FairInformation" onClick={this.scrollToElement}>Fair Information Statement</a></li>
        </ul>
      ) 
    } else if(this.state.pages.exchange) {
      return (
        <ul>
          <li><a href="#how-it-works" onClick={this.scrollToElement}>How It Works</a></li>
          <li><a href="#sample-comp" onClick={this.scrollToElement}>Sample Comp</a></li>
          <li><a href="#coverage" onClick={this.scrollToElement}>National Coverage</a></li>
        </ul>
      ) 
    }
  },

  getCta: function() {
    switch(this.props.context) {
      case "enterprise":
        return <Link to="demo-request"><button className="button">{this.props.ctaLabels.enterprise}</button></Link>
      case "exchange":
        return <a href={this.props.signupUrl} className="button">{this.props.ctaLabels.exchange}</a>
    }
  },

  render: function() {
    return (
      <header className={classnames({
        'faux-header':   true,
        'visible':       this.state.scrollTop > 450
      })}>
        <div className="container">
          <div className="logo" onClick={this.scrollToTop}>
            <Icons type="cs_icon" />
          </div>
          <div className="left">
            <nav>
              {this.getHeaderLinks()}
            </nav>
          </div>
          <div className="right">
            {this.getCta()}
          </div>
        </div>
      </header>
    )
  }
});

module.exports = FauxHeader;