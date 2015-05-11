'use strict';
var React = require('react');
var classnames = require('classnames');
var Icons = require('../components/Icons.jsx');

var AccurateComps = React.createClass({
  render: function() {
    return (
      <section id="accurate-comps" className={classnames({
        'accurate-comps': true,
        'ui-block':       true
      }, this.props.className)}>
        <div className="container push-left">
          <div className="row">
            <div className="col six left block-info">
              <div>
                <h5 className="section-header">Accurate Comps</h5>
                <h3 className="h1">CompStak analysts verify each and every comp.</h3>
                <p>Our team of qualified Real Estate Analysts and Data Scientists employs a combination of manual review 
                and statistical anomaly detection to ensure quality.</p>
                <ul className="checklist">
                  <li><Icons type="tick" /><span> Only confirmed real estate professionals</span></li>
                  <li><Icons type="tick" /><span> Standardized format for searching and analysis</span></li>
                  <li><Icons type="tick" /><span> Each lease comp is verified by our analysts</span></li>
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
                  <p>Data Science & Machine Learning</p>
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