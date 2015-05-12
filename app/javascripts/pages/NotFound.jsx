'use strict';
var React = require('react');
var Header = require('../components/Header.jsx');
var OnPgSplitter = require('../components/OnPageSplitter.jsx');
var Footer = require('../components/Footer.jsx');

var NotFound = React.createClass({
  render: function () {
    return (
      <div className="page-not-found">
        <Header 
          {...this.props}
          login={true}
          menu={true}
          className="dark-blue-bg"
        />
        <div className="default-page-title"><h6>404</h6><h1>Page Not Found</h1></div>

        <OnPgSplitter 
          {...this.props}
          className="dark-blue-bg"
        />

        <Footer {...this.props}/>
      </div>
    )
  }
});

module.exports = NotFound;

