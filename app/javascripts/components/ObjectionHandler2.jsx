'use strict';
var React = require('react');
var Icons = require('../components/Icons.jsx');
var classnames = require('classnames');

var ObjectionHandler2 = React.createClass({
  render: function() {
    return (
      <div className={classnames({
        'objection-handler':  true
      }, this.props.className)}>

        <div className="container row">
          <div className="col four">
            <div className="icon small"><Icons type="tick"/></div>
            <h4 className="h6">No Data Entry</h4>
            <p>Send your comps in any format – it only takes 60 seconds. We handle all data entry.</p>
          </div>

          <div className="col four">
            <div className="icon small"><Icons type="tick"/></div>
            <h4 className="h6">Anonymous</h4>
            <p>Your membership is anonymous. We never reveal your identity when you share comps with us.</p>
          </div>
          
          <div className="col four">
            <div className="icon small"><Icons type="tick"/></div>
            <h4 className="h6">Share Any Comp</h4>
            <p>You can share information about your own deals or deals that others have shared with you.</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ObjectionHandler2;