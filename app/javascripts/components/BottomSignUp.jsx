'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var DemoEmailForm = require('../components/DemoEmailForm.jsx');
var _ = require('underscore');
var classnames = require('classnames');
var Link = Router.Link;

var BottomSignUp = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      signUpHeadline: null
    }
  },

  componentDidMount: function() {
     if(this.context.router.getCurrentQuery().playVideo && this.isMounted()) {
        this.props.toggleVideoModal();
     }

     this.setHeadlines();
  },

  setHeadlines: function() {
    switch(this.props.context) {
        case "enterprise":
          this.setState({
            signUpHeadline: "Learn how CompStak data can help you close better, faster deals.",
          })
          break
        case "exchange":
          this.setState({
            signUpHeadline: "Join thousands of CRE professionals and start trading comps today.",
          })
          break  
    }
  },

  render: function () {
    return (
      <div className={classnames({
        'bottom-sign-up': true,
        'dark-blue': (this.props.mode == "dark-blue") ? true : false,
        'black': (this.props.mode == "black") ? true : false,
        'grey-bg': (this.props.mode == "grey") ? true : false,
        'blue-bg': (this.props.mode == "blue") ? true : false,
        'white': (this.props.mode == "white") ? true : false,
      })}>
        <div className="container">
          <p className="h3">{this.state.signUpHeadline}</p>
          <DemoEmailForm/>
        </div>
      </div>
    )
  }
});

module.exports = BottomSignUp;