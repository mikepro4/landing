'use strict';
var React = require('react');
var Router = require('react-router');
var Logos = require('../components/Logos.jsx');
var Icons = require('../components/Icons.jsx');
var UpdateUserMixin = require('../mixins/UpdateUser.jsx');
var Link = Router.Link;

var Enterprise = React.createClass({

  mixins: [ Router.State, Router.Navigation, UpdateUserMixin ],
  
  render: function () {
    return (
      <div className="splitter">
        <div className="top">
          <div className="logo">
            <Icons type="cs_logo" />
          </div>
          <div className="container">
            <h2 className="h3">A Massive Commercial Lease Comps Database</h2>
            <p className="h6 grey">Nationwide • Accurate • Searchable</p>
            <div className="buttons">
              <h1 className="h6">Which are you?</h1>
              <Link className="button" to="exchange" onClick={this.updateUser}>Broker</Link>
              <Link className="button" to="exchange" onClick={this.updateUser}>Appraiser</Link>
              <Link className="button" to="exchange" onClick={this.updateUser}>Researcher</Link>
              <Link className="button" to="enterprise" onClick={this.updateUser}>Landlord</Link>
              <Link className="button" to="enterprise" onClick={this.updateUser}>Lender</Link>
              <Link className="button" to="enterprise" onClick={this.updateUser}>Investor</Link>
            </div>
          </div>
        </div>
        <Logos/>
      </div>
    );
  }
});

module.exports = Enterprise;