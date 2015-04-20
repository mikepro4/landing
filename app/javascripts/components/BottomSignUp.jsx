'use strict';
var React = require('react');
var Router = require('react-router');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var BottomSignUp = React.createClass({

  sendEmail: function () {
    $.ajax({
      url: '/api/demoRequest',
      type: 'POST',
      data: JSON.stringify({
        email: 'email',
        name: 'name',
        message: 'message',
        agreedToUpload: false
      }),
      contentType: 'application/json',
      success: function(data) {
        console.log(data);
      }
    });
  },

  render: function () {
    return (
      <div className="dark-blue bottom-sign-up">
        <div className="container">
          <p className="h3" onClick={this.sendEmail}>Learn how CompStak data can help you close better, faster deals.</p>
          <form className="sign-up">
            <div className="input-wrap">
              <input type="text" placeholder="Email@CompStak.com"/>
              <label>
                <Icons type="mail_icon" />
              </label>
            </div>
            <button>Schedule a Demo</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = BottomSignUp;