'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var NavigationLinks = React.createClass({
  render: function() {
    if(this.props.context === "enterprise") {
      return (
        <div className="row">
          <div className="col three">
            <h6>Enterprise</h6>
            <ul>
              <li><Link to="demo-request">Schedule A Demo</Link></li>
              <li><a href="https://enterprise.compstak.com/" target="_blank">Login</a></li>
              <li><a href="https://compstakenterprise.zendesk.com/hc/en-us" target="_blank" to="enterprise">Support</a></li>
              <li><a href="https://compstakenterprise.zendesk.com/hc/en-us/sections/200624207-Frequently-Asked-Questions" target="_blank" to="enterprise">FAQ</a></li>
            </ul>
          </div>
          <div className="col three">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:sales@compstak.com" target="_blank" title="Contact CompStak Enterpise Sales Representative">sales@compstak.com</a></li>
              <li>1-646-926-6707</li>
            </ul>
          </div>
          <div className="col three">
            <h6>Legal</h6>
            <ul>
              <li><Link to="legal">Terms of Use</Link></li>
              <li><Link to="legal" query={{scrollTo: "PrivacyPolicy"}}>Privacy Policy</Link></li>
              <li><Link to="legal" query={{scrollTo: "FairStatement"}}>Fair Info Statement</Link></li>
            </ul>
          </div>
        </div>
      )
    } else if(this.props.context === "exchange") {
      return (
        <div className="row">
          <div className="col three">
            <h6>Enterprise</h6>
            <ul>
              <li><Link to="demo-request">Schedule A Demo</Link></li>
              <li><a href="https://enterprise.compstak.com/" target="_blank">Login</a></li>
              <li><a href="https://compstakenterprise.zendesk.com/hc/en-us" target="_blank" to="enterprise">Support</a></li>
              <li><a href="https://compstakenterprise.zendesk.com/hc/en-us/sections/200624207-Frequently-Asked-Questions" target="_blank" to="enterprise">FAQ</a></li>
            </ul>
          </div>
          <div className="col three">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:sales@compstak.com" target="_blank" title="Contact CompStak Enterpise Sales Representative">sales@compstak.com</a></li>
              <li>1-646-926-6707</li>
            </ul>
          </div>
          <div className="col three">
            <h6>Legal</h6>
            <ul>
              <li><Link to="legal">Terms of Use</Link></li>
              <li><Link to="legal" query={{scrollTo: "PrivacyPolicy"}}>Privacy Policy</Link></li>
              <li><Link to="legal" query={{scrollTo: "FairStatement"}}>Fair Info Statement</Link></li>
            </ul>
          </div>
        </div>
      )
    }
  }
});

module.exports = NavigationLinks;