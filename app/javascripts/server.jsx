'use strict';

var React         = require('react');
var Router        = require('react-router');
var DocumentTitle = require('react-document-title');

var routes = require('./routes.jsx');
var Html   = require('./components/Html.jsx');

module.exports = function (req, res, next) {
  Router.run(routes, req.url, function (Handler, state) {
    
    var markup = React.renderToString(<Handler />);
    var title  = DocumentTitle.rewind();
    var html   = React.renderToStaticMarkup(<Html title={title} markup={markup}></Html>);
    var ieHtmlClass = '<!--[if lt IE 7]><html class="ie ielt9 ielt8 ielt7" lang="en"><![endif]--><!--[if IE 7]><html class="ie ielt9 ielt8 ie7" lang="en"><![endif]--><!--[if IE 8]><html class="ie ielt9 ie8" lang="en"><![endif]--><!--[if IE 9]><html class="ie ie9" lang="en"><![endif]--><!-- [if gt IE 9] <!--><html lang="en"><!-- <![endif]-->';
    
    res.send('<!DOCTYPE html>' + ieHtmlClass + html);
  });
};

