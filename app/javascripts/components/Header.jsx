'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var Header = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    if( this.props.scrollTop > 150) {
      var headerClass = "visible"
    } else {
      var headerClass = "invisible"
    }
    return (
      <header className={headerClass}>
        <div className="container">
          <div className="logo">
            <Icons type="cs_icon" />
          </div>
          <div className="right">
            <nav>
              <ul>
                <li><a href="#">CompStak Comps</a></li>
                <li><a href="#">National Coverage</a></li>
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