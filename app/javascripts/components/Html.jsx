'use strict';
var React = require('react');

// Handle the HTML rendering on the server
var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="icon" type="image/png" href="/images/favicon.ico" />
          <link rel="apple-touch-icon-precomposed" href="/images/apple-touch-icon.png" />
          <link rel="stylesheet" href="/static/main.css" />
          <script src="/static/lib.js"></script>
          <script src="/static/main.js"></script>
          <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = Html;
