'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var SampleComp = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount: function() {
  },

  render: function () {
    var headline;
    var introText;
    var searchByText;
    var listTitle;
    if(this.props.context === "enterprise") {
      introText = 
        <p>Complete, accurate, deal-level data directly from brokers and appraisers on the ground, doing deals.</p>        
      searchByText = 
        "Search & filter by 24 details"
      listTitle = 
        <h5>24 Hard-to-Source Details</h5>
    } else if(this.props.context === "exchange") {
      introText = 
        <p>Complete, accurate data directly from brokers, researchers and appraisers.</p>
      searchByText = 
        "Search comps by 24 attributes"
      listTitle = 
        <h5>24 Hard-to-Find Details</h5>
    }
    return (
      <section id="sample-comp" className={classnames({
        'sample-comp': true,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false,
      })}>
        <div className="container">
          <div className="row">
            <div className="col six block-info">
              <div>
                <h3 className="h1">Complete Comps</h3>
                {introText}
              </div>
            </div>
            <div className="col six right">
              <div className="comp">
                <div className="comp-map">
                  <div className="comp-marker">
                    <div className="tooltip">
                      <span className="pointer-line"></span>
                      <div className="main-info">
                        <span className="address">36 Cooper Square</span>
                        <span className="comp-number">6 comps in this building</span>
                      </div>
                      <div className="secondary-info">
                        <span className="tenant">CompStak</span>
                        <span className="lease-info">2014 - Q4 • Office • New Lease • Class B</span>
                        <div className="tooltip-buttons row">
                          <button className="button select"><span className="checkbox"></span>Select</button>
                          <button className="button">Details<Icons type="tiny_right_arrow" /></button>
                        </div>
                      </div>
                    </div>
                    <Icons type="map_marker" />
                  </div>
                </div>
                <div className="comp-info">
                  <div className="comp-buttons row">
                    <div><button className="button">Export<span className="pointer-line"></span></button></div>
                    <div className="align-right"><button className="button update">Update</button></div>
                  </div>
                  <ul>
                    <li className="row">
                      <div>
                        Transaction Size
                      </div>
                      <div className="align-right">
                        79,998 SF
                      </div>
                    </li>
                    <li className="row">
                      <div>
                        Starting Rent
                      </div>
                      <div className="align-right">
                        $105
                      </div>
                    </li>
                    <li className="row">
                      <div>
                        Rent Schedule
                      </div>
                      <div className="align-right">
                        $0/1y, $105/4y
                      </div>
                    </li>
                    <li className="row">
                      <div>
                        Free Rent
                      </div>
                      <div className="align-right">
                        12 months
                      </div>
                    </li>
                    <li className="row">
                      <div>
                        TI Allowance
                      </div>
                      <div className="align-right">
                        $70/SF
                      </div>
                    </li>
                    <span className="pointer-line"></span>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col six left comp-callouts">
              <ul className="checklist">
                <li><Icons type="tick" /><span> {searchByText}</span></li>
                <li><Icons type="tick" /><span> Powerful, interactive maps</span></li>
              </ul>
              <ul className="checklist export">
                <li><Icons type="tick" /><span> Easily port data to Excel or PDF</span></li>
              </ul>
              <ul className="checklist list-items">
                <li><Icons type="tick" /><span> Starting rents <span className="grey">(not asking rents)</span></span></li>
                <li><Icons type="tick" /><span> Full rent schedule</span></li>
                <li><Icons type="tick" /><span> Full concession package</span></li>
              </ul>
            </div>
          </div>
          <div className="row comp-details">
            {listTitle}
            <ul className="checklist">
              <li><Icons type="tick" /><span> Street Address</span></li>
              <li><Icons type="tick" /><span> Submarket</span></li>
              <li><Icons type="tick" /><span> Tenant</span></li>
              <li><Icons type="tick" /><span> Tenant Industry</span></li>
              <li><Icons type="tick" /><span> Transaction Date</span></li>
              <li><Icons type="tick" /><span> Lease Term</span></li>
              <li><Icons type="tick" /><span> Expiration Date</span></li>
              <li><Icons type="tick" /><span> Transaction Size</span></li>
              <li><Icons type="tick" /><span> Starting Rent</span></li>
              <li><Icons type="tick" /><span> Escalations</span></li>
              <li><Icons type="tick" /><span> TI Allowance</span></li>
              <li><Icons type="tick" /><span> Free Rent</span></li>
              <li><Icons type="tick" /><span> Net Effective Rent</span></li>
              <li><Icons type="tick" /><span> Space Type</span></li>
              <li><Icons type="tick" /><span> Floors Occupied</span></li>
              <li><Icons type="tick" /><span> Building Name</span></li>
              <li><Icons type="tick" /><span> Property Type</span></li>
              <li><Icons type="tick" /><span> Building Class</span></li>
              <li><Icons type="tick" /><span> Year Built</span></li>
              <li><Icons type="tick" /><span> Building Size</span></li>
              <li><Icons type="tick" /><span> Landlord</span></li>
              <li><Icons type="tick" /><span> Landlord Brokers</span></li>
              <li><Icons type="tick" /><span> Tenant Brokers</span></li>
              <li><Icons type="tick" /><span> Lease Notes</span></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = SampleComp;