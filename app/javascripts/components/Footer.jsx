'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('underscore');
var classnames = require('classnames');

var Footer = React.createClass({
  render: function () {
    return (
      <footer className="dark-blue">
        <div className="container">
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
            <div className="col one logo">
              <svg width="24px" height="28px" viewBox="0 0 24 28">
              <defs>
              </defs>
              <g>
                <g>
                  <polygon fill="#283040" points="12,0 9.6,1.4 0,6.9 0,20.8 9.6,26.4 12,27.8 24.1,20.8 24.1,18 16.8,22.2 12,24.9 2.5,19.4 
                    2.5,8.4 12,2.9 16.8,5.6 21.6,8.4 12,13.9 12,16.8 24.1,9.8 24.1,6.9    "/>
                  <polygon fill="#283040" points="12,22.2 24.1,15.3 24.1,12.4 12,19.4     "/>
                </g>
              </g>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    )
  }
});

module.exports = Footer;