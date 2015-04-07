'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Footer = React.createClass({
  render: function () {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col one">
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
            <div className="col three">
              <h6>Enterprise</h6>
              <ul>
                <li><Link to="enterprise">Sample Comp</Link></li>
                <li><Link to="enterprise">Coverage</Link></li>
                <li><Link to="enterprise">Data Verification</Link></li>
                <li><Link to="enterprise">Analytics</Link></li>
                <li><Link to="enterprise">Underwriting</Link></li>
                <li><Link to="enterprise">Asset MGMT & Leasing</Link></li>
              </ul>
            </div>
            <div className="col three">
              <h6>Product</h6>
              <ul>
                <li><Link to="enterprise">Request Demo</Link></li>
                <li><Link to="enterprise">Login</Link></li>
                <li><Link to="enterprise">Support</Link></li>
                <li><Link to="enterprise">FAQ</Link></li>
              </ul>
            </div>
            <div className="col three">
              <h6>Contact</h6>
              <ul>
                <li><Link to="enterprise">Sales@CompStak.com</Link></li>
                <li><Link to="enterprise">1 646 926 6707</Link></li>
              </ul>
              <h6>Company</h6>
              <ul>
                <li><Link to="enterprise">About</Link></li>
                <li><Link to="enterprise">Careers</Link></li>
              </ul>
            </div>
            <div className="col two">
              <h6>Legal</h6>
              <ul>
                <li><Link to="enterprise">Terms of Use</Link></li>
                <li><Link to="enterprise">Privacy Policy</Link></li>
                <li><Link to="enterprise">Fair Info Statement</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
});

module.exports = Footer;