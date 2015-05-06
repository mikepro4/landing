'use strict';
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavigationLinks = React.createClass({
  render: function() {
    switch(this.props.context) {

      case "enterprise":
        return <div className="row">
          <div className="col three">
            <h6>Enterprise</h6>
            <ul>
              <li><Link to="enterprise">Overview</Link></li>
              <li><Link to="demo-request">Schedule A Demo</Link></li>
              <li><a href="https://enterprise.compstak.com/" target="_blank">Login</a></li>
            </ul>
          </div>
          <div className="col three">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:sales@compstak.com" target="_blank" title="Contact CompStak Enterpise Sales Representative">sales@compstak.com</a></li>
              <li>1-646-926-6707</li>
              <li><a href="https://www.facebook.com/CompStak" target="_blank" title="CompStak Facebook">Facebook</a></li>
              <li><a href="https://twitter.com/CompStak" target="_blank" title="CompStak Twitter">Twitter</a></li>
            </ul>
          </div>
          <div className="col three">
            <h6>Legal</h6>
            <ul>
              <li><Link to="legal">Terms of Use</Link></li>
              <li><Link to="legal" query={{scrollTo: "PrivacyPolicy"}}>Privacy Policy</Link></li>
              <li><Link to="legal" query={{scrollTo: "FairInformation"}}>Fair Info Statement</Link></li>
            </ul>
          </div>
        </div>

      case "exchange":
        return <div className="row">
          <div className="col three">
            <h6>Exchange</h6>
            <ul>
              <li><Link to="exchange">Overview</Link></li>
              <li><a href={this.props.signupUrl}>Join Free</a></li>
              <li><a href="https://exchange.compstak.com/" target="_blank">Login</a></li>
              <li><a href="https://compstak.zendesk.com" target="_blank" to="enterprise">Support</a></li>
            </ul>
          </div>
          <div className="col three">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:help@compstak.com" target="_blank" title="Contact CompStak Exchange Representative">help@compstak.com</a></li>
              <li>1-646-926-6707</li>
              <li><a href="https://www.facebook.com/CompStak" target="_blank" title="CompStak Facebook">Facebook</a></li>
              <li><a href="https://twitter.com/CompStak" target="_blank" title="CompStak Twitter">Twitter</a></li>
            </ul>
          </div>
          <div className="col three">
            <h6>Legal</h6>
            <ul>
              <li><Link to="legal">Terms of Use</Link></li>
              <li><Link to="legal" query={{scrollTo: "PrivacyPolicy"}}>Privacy Policy</Link></li>
              <li><Link to="legal" query={{scrollTo: "FairInformation"}}>Fair Info Statement</Link></li>
            </ul>
          </div>
        </div> 

      default: 
        return <div className="row">
          <div className="col three">
            <h6>Contact</h6>
            <ul>
              <li><a href="mailto:info@compstak.com" target="_blank" title="Contact CompStak Enterpise Sales Representative">info@compstak.com</a></li>
              <li>1-646-926-6707</li>
            </ul>
          </div>
          <div className="col three">
            <h6>Follow Us</h6>
            <ul>
              <li><a href="https://www.facebook.com/CompStak" target="_blank" title="CompStak Facebook">Facebook</a></li>
              <li><a href="https://twitter.com/CompStak" target="_blank" title="CompStak Twitter">Twitter</a></li>
            </ul>
          </div>

          <div className="col three">
            <h6>Legal</h6>
            <ul>
              <li><Link to="legal">Terms of Use</Link></li>
              <li><Link to="legal" query={{scrollTo: "PrivacyPolicy"}}>Privacy Policy</Link></li>
              <li><Link to="legal" query={{scrollTo: "FairInformation"}}>Fair Info Statement</Link></li>
            </ul>
          </div>
        </div>
    }
  }
});

module.exports = NavigationLinks;