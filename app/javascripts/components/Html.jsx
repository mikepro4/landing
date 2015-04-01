'use strict';
var React = require('react');

// Handle the HTML rendering on the server
var Html = React.createClass({
render: function() {
  return (
      <html>
      <head>
        <title>{ this.props.title }</title>
        <link rel="stylesheet" href="/static/main.css" />
        <script src="/static/lib.js"></script>
        <script src="/static/main.js"></script>
      </head>
      <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
      </html>
  );
}
});

module.exports = Html;
