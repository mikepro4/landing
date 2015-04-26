'use strict';
var React = require('react');
var Router = require('react-router');
var classnames = require('classnames');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var Header = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  getInitialState: function() {
    return {
      pages: {
        enterprise: this.isActive('enterprise'),
        exchange: this.isActive('exchange'),
        legal: this.isActive('legal')
      }
    }
  },

  componentDidMount: function () {
    window.addEventListener('scroll', this.onScroll, false);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.onScroll, false);
  },

  scrollToElement: function(e) {
    e.preventDefault();
    var destination = $(e.target).attr('href');

    var scrollTop;
    if($(destination).offset().top < 300) {
      scrollTop = $(destination).offset().top
    } else {
      scrollTop = $(destination).offset().top - $('header').height()
    }

    $('body').animate({
      scrollTop: scrollTop
    }, 750);
  },

  scrollToTop: function() {
    $('body').animate({ scrollTop: 0 }, 750);
  },

  onScroll: function () {
    var headerHeight = $('header').height() + 10;
    var scrollTop = this.props.scrollTop;

    $('section').each(function() {
      var id = $(this).attr('id');
      var element = $('a[href="#'+id+'"]').parent('li');
      if(scrollTop + 300 > $(this).offset().top) {
        $(this).addClass('visible');
      } else {
        $(this).removeClass('visible');
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
    var headerLinks;
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
        </ul>
      )
    }
  },

  render: function () {
    return (
      <header className={classnames({
          'faux-header':   true,
          'visible':       this.props.scrollTop > 450
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
            <Link to="demo-request"><button className="button">Schedule a Demo</button></Link>
          </div>
        </div>
      </header>
    )
  }
});

module.exports = Header;