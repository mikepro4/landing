'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var SampleComp = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section className="grey-bg sample-comp">
        <div className="container">
          <div className="row">
            <div className="col six block-info">
              <h3 className="h1">Complete Comps</h3>
              <p>Complete, accurate, deal-level data directly from brokers and appraisers on the ground, doing deals.</p>
            </div>
            <div className="col six">
              <img src="http://placehold.it/900x600/cccccc/555555&text=Google Map"/>
              <img src="http://placehold.it/900x600/ffffff/cccccc&text=UI Screenshot"/>
            </div>
          </div>
          <div className="row">
            <ul className="checklist comp-details">
              <li><Icons type="tick" /><span>Street Address</span></li>
              <li><Icons type="tick" /><span>Submarket</span></li>
              <li><Icons type="tick" /><span>Tenant</span></li>
              <li><Icons type="tick" /><span>Tenant Industry</span></li>
              <li><Icons type="tick" /><span>Transaction Date</span></li>
              <li><Icons type="tick" /><span>Lease Term</span></li>
              <li><Icons type="tick" /><span>Expiration Date</span></li>
              <li><Icons type="tick" /><span>Transaction Size</span></li>
              <li><Icons type="tick" /><span>Starting Rent</span></li>
              <li><Icons type="tick" /><span>Escalations</span></li>
              <li><Icons type="tick" /><span>TI Allowance</span></li>
              <li><Icons type="tick" /><span>Free Rent</span></li>
              <li><Icons type="tick" /><span>Net Effective Rent</span></li>
              <li><Icons type="tick" /><span>Space Type</span></li>
              <li><Icons type="tick" /><span>Floors Occupied</span></li>
              <li><Icons type="tick" /><span>Building Name</span></li>
              <li><Icons type="tick" /><span>Property Type</span></li>
              <li><Icons type="tick" /><span>Building Class</span></li>
              <li><Icons type="tick" /><span>Year Built</span></li>
              <li><Icons type="tick" /><span>Building Size</span></li>
              <li><Icons type="tick" /><span>Landlord</span></li>
              <li><Icons type="tick" /><span>Landlord Brokers</span></li>
              <li><Icons type="tick" /><span>Tenant Brokers</span></li>
              <li><Icons type="tick" /><span>Lease Notes</span></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = SampleComp;