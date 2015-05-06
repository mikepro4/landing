'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var OnPageSplitter = React.createClass({
  
  contextTypes: {
    router: React.PropTypes.func
  },

  render: function () {
    return (
      <div className={classnames({
        'on-page-splitter': true,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false,
      })}>
        <div className="container row">
          <div  className="left">
            <Link to="splitter" onClick={this.props.clearLocalStorage}>
              <h6>CompStak Enterprise</h6>
              <p className="h4 blue">For Lenders, Landlords, & Investors</p>
              <p>Unparelleled big data analytics for asset management and underwriting.</p>
              <div className="arrow"><Icons type="right_arrow" /></div>
            </Link>
          </div>
          <div className="right">
            <Link to="splitter" onClick={this.props.clearLocalStorage}>
              <h6>CompStak Exchange</h6>
              <p className="h4 blue">For Brokers, Appraisers, & Researchers</p>
              <p>The world's largest, free, anonymous lease comp trading platform</p>
              <div className="arrow"><Icons type="right_arrow" /></div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = OnPageSplitter;