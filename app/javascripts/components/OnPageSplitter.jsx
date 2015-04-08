'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var OnPageSplitter = React.createClass({
  render: function () {
    return (
      <div className="dark-blue on-page-splitter">
        <div className="container row">
          <div  className="left">
            <Link to="enterprise">
              <h6>CompStak Enterprise</h6>
              <p className="h4 blue">For Lenders, Landlords, & Investors</p>
              <p>Unparelleled big data analytics for asset management and underwriting.</p>
              <div className="arrow"><Icons type="right_arrow" /></div>
            </Link>
          </div>
          <div className="right">
            <Link to="exchange">
              <h6>CompStak Exchange</h6>
              <p className="h4 blue">For Brokers, Appraisers, & Researchers</p>
              <p>The worlds largest, free, annoymous lease comp trading platform.</p>
              <div className="arrow"><Icons type="right_arrow" /></div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = OnPageSplitter;