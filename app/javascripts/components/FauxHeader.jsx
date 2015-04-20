'use strict';
var React = require('react');
var Router = require('react-router');
var classnames = require('classnames');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var Header = React.createClass({

  mixins: [ Router.State, Router.Navigation ],

  componentDidMount: function () {
    window.addEventListener('scroll', this.onScroll, true);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.onScroll, false);
  },

  scrollToElement: function(e) {
    e.preventDefault();
    var destination = $(e.target).attr('href');
    $('body').animate({
      scrollTop: $(destination).offset().top - $('header').height()
    }, 750);
  },

  scrollToTop: function() {
    $('body').animate({ scrollTop: 0 }, 750);
  },

  onScroll: function () {
    var headerHeight = $('header').height() + 10;
    var scrollTop = this.props.scrollTop;

    $('section').each(function(index, element) {
      var id = $(this).attr('id');
      var element = $('a[href="#'+id+'"]').parent('li');

      if(scrollTop + headerHeight > $(this).offset().top && 
         scrollTop + headerHeight <= $(this).offset().top + $(this).height()) {
        element.addClass('active');
      } else {
        element.removeClass('active');
      } 
    });
  },

  render: function () {
    return (
      <header className={classnames({
          'faux-header':   true,
          'visible':       this.props.scrollTop > 150
        })}>
        <div className="container">
          <div className="logo" onClick={this.scrollToTop}>
            <Icons type="cs_icon" />
          </div>
          <div className="right">
            <nav>
              <ul>
                <li><a href="#sample-comp" onClick={this.scrollToElement}>CompStak Comps</a></li>
                <li><a href="#coverage" onClick={this.scrollToElement}>National Coverage</a></li>
              </ul>
            </nav>
            <button>Schedule a Demo</button>
          </div>
        </div>
      </header>
    )
  }
});

module.exports = Header;