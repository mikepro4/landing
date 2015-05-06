'use strict';

// enables JSX requires
require('node-jsx').install({ extension: '.jsx' });

var debug        = require('debug')('app');
var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var cachebuster  = require('./cachebuster');
var httpProxy    = require("http-proxy");
var proxy        = new httpProxy.createProxyServer();
var serverRender = require('./app/javascripts/server.jsx');
var sendwithus   = require('sendwithus')('live_8e5b7c10333b6e9efd11e45e9636a6efda360a7f');

var app = express();
var router = express.Router(); 

app.use(logger(app.get('env') === 'production' ? 'combined' : 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// static files with cache buster
var publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
if (app.get('env') === 'production') {
  app.get(cachebuster.path, cachebuster.remove, express.static(publicPath), cachebuster.restore);
}

if (app.get('env') === 'development') {
  // run livereload and webpack dev server
  require('./dev-tools');
}

app.all('/api/*', function (req, res) {
  proxy.web(req, res, {target: 'http://localhost/'});
});

app.use('/nodeApi', router);
router.route('/compstakEmail')

  .post(function(req, res) {

    sendwithus.send({
      email_id: "tem_seCspv6hAhyUhStS7FoqQT",
      recipient: { address: "sales@compstak.com"},
      email_data: { 
        email: req.body.email, 
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        business: req.body.business, 
        agreedToSubscribe:  req.body.agreedToSubscribe
      },
      sender: {
        address: 'sales@compstak.com',
        name: 'CompStak'
      }
    }, function (err, data) {
      if (err)
          res.send(err);
      res.json(data);
    });
             
  });

router.route('/userEmail')

  .post(function(req, res) {

    sendwithus.send({
      email_id: "tem_5S9PLDNdUQGHmRupKCzstX",
      recipient: { address: req.body.email},
      email_data: { 
        firstName: req.body.firstName, 
        lastName: req.body.lastName
      },
      sender: {
        address: 'sales@compstak.com',
        name: 'CompStak'
      }
    }, function (err, data) {
      if (err)
          res.send(err);
      res.json(data);
    });
             
  });

// use react routes
app.use('/', serverRender);

// error pages
app.use(function (err, req, res, next) {
  res.status(500);
  // TODO: simple page for errors not in dev environment
  res.send('<pre>' + err.stack + '</pre>');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  debug('Express ' + app.get('env') + ' server listening on port ' + this.address().port);
});
