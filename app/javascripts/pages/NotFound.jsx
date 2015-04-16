'use strict';
var React = require('react');

var NotFound = React.createClass({
  render: function () {
    return (
      <div className="default-page-title"><h6>404</h6><h1>Page Not Found</h1></div>
    )
  }
});

module.exports = NotFound;

