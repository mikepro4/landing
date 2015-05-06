'use strict';
var React = require('react');
var classnames = require('classnames');
var Icons = require('../components/Icons.jsx');

var AccurateComps = React.createClass({
  render: function() {
    return (
      <section id="accurate-comps" className={classnames({
        'accurate-comps': true,
        'ui-block':       true,
        'dark-blue':      (this.props.mode == "dark-blue") ? true : false,
        'black':          (this.props.mode == "black") ? true : false,
        'grey-bg':        (this.props.mode == "grey") ? true : false,
        'blue-bg':        (this.props.mode == "blue") ? true : false,
        'white':          (this.props.mode == "white") ? true : false
      })}>
        <div className="container push-left">
          <div className="row">
            <div className="col six left block-info">
              <div>
                <h5 className="section-header">Accurate Comps</h5>
                <h3 className="h1">CompStak analysts verify each and every comp.</h3>
                <p>Our team of qualified Real Estate Analysts and Data Scientists employs a combination of manual review 
                and statistical anomaly detection to ensure quality.</p>
                <ul className="checklist">
                  <li><Icons type="tick" /><span> Verified CRE professionals only</span></li>
                  <li><Icons type="tick" /><span> Trade: 1–for–1: Give a comp. Get a comp</span></li>
                  <li><Icons type="tick" /><span> Remain completely annoymous</span></li>
                </ul>
              </div>
            </div>
            <div className="col six right analysts">
              <div className="img-wrap">
                <img src="/images/analysts.png"/>
                <div className="label analyst-one">
                  <p className="h6">Wayne Yu</p>
                  <p>Real Estate Science</p>
                </div>
                <div className="label analyst-two">
                  <p className="h6">Diana Bishop</p>
                  <p>Data Quality Management</p>
                </div>
                <div className="label analyst-three">
                  <p className="h6">Alex Kass</p>
                  <p>Data Science & Machine</p>
                </div>
              </div>
              <div className="verification-chart">
                <img src="/images/verification-chart.svg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = AccurateComps;