'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Link = Router.Link;

var Header = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section className="enterprise-intro grey-bg">
        <div className="container">
          <div className="row">
            <div className="inline-col first middle six">
              <h2>Office, retail and industrial lease comps.</h2>
              <p>We collect and verify actual, deal-level transaction records reported directly to us by brokers on the ground. Our comps are recent, accurate and searchable.</p>
            </div>
            <div className="inline-col middle six">
              <img src="http://placehold.it/900x600"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = Header;