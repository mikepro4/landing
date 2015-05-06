'use strict';
var React = require('react');
var classnames = require('classnames');
var DemoEmailForm = require('../components/DemoEmailForm.jsx');

var BottomSignUp = React.createClass({

  getHeadlines: function() {
    switch(this.props.context) {
      case "enterprise":
        return "Learn how CompStak data can help you close better, faster deals."
      case "exchange":
        return "Join thousands of CRE professionals and start trading comps today."
    }
  },

  render: function() {
    return (
      <div className={classnames({
        'bottom-sign-up': true,
        'dark-blue':      (this.props.mode == "dark-blue") ? true : false,
        'black':          (this.props.mode == "black") ? true : false,
        'grey-bg':        (this.props.mode == "grey") ? true : false,
        'blue-bg':        (this.props.mode == "blue") ? true : false,
        'white':          (this.props.mode == "white") ? true : false
      })}>
        <div className="container">
          <p className="h3">{this.getHeadlines()}</p>
          <DemoEmailForm {...this.props}/>
        </div>
      </div>
    )
  }
});

module.exports = BottomSignUp;