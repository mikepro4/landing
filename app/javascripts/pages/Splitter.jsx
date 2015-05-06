'use strict';
var React = require('react');
var Router = require('react-router');
var Logos = require('../components/Logos.jsx');
var Icons = require('../components/Icons.jsx');
var UpdateUserMixin = require('../mixins/UpdateUser.jsx');
var Link = Router.Link;

var Enterprise = React.createClass({

  mixins: [ UpdateUserMixin ],

  render: function () {
    var jobTitles = this.props.jobOptions.map(function (title, i) {
      return (
        <Link to={this.getUserMode(i)} className="button" data-position={i} onClick={this.updateUser}>
          {title}
        </Link>
      );
    }.bind(this));

    return (
      <div className="splitter">
        <div className="top">
          <div className="logo">
            <Icons type="cs_logo" />
          </div>
          <div className="container">
            <h2 className="h3">A Massive Commercial Lease Comp Database</h2>
            <p className="h6 grey">Nationwide • Accurate • Searchable</p>
            <div className="buttons">
              <h1 className="h6">Which are you?</h1>
              {jobTitles}
            </div>
          </div>
        </div>
        <Logos 
          {...this.props}
          mode="dark-blue"
        />
      </div>
    );
  }
});

module.exports = Enterprise;