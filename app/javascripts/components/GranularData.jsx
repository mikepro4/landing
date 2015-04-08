'use strict';
var React = require('react');
var Router = require('react-router');
var HomePageRouterMixin = require('../mixins/HomePageRouter.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var EntGranularData = React.createClass({

  mixins: [ Router.State, Router.Navigation, HomePageRouterMixin ],

  goToHome: function () {
    this.selectHomePage(this.props.user)
  },

  render: function () {
    return (
      <section className="ui-block enterprise-intro">
        <div className="container">
          <div className="row">
            <div className="col six right block-info">
              <div>
                <h3 className="h1">Granular, accurate, deal-level lease data</h3>
                <ul className="checklist">
                  <li><Icons type="tick" /><span>Actual Transaction Data</span></li>
                  <li><Icons type="tick" /><span>Accurate & Detailed</span></li>
                  <li><Icons type="tick" /><span>Inifinitely & Instantly Searchable</span></li>
                  <li><Icons type="tick" /><span>Lease & Property Information</span></li>
                </ul>
              </div>
            </div>
            <div className="col six left screenshot">
              <img src="http://placehold.it/900x600/ffffff/cccccc&text=UI Screenshot"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = EntGranularData;