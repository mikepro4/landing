'use strict';
var React = require('react');
var Router = require('react-router');
var Logos = require('../components/Logos.jsx');
var Icons = require('../components/Icons.jsx');
var Link = Router.Link;

var Enterprise = React.createClass({

  mixins: [ Router.State, Router.Navigation ],
  
  setExchange: function () {
    this.props.updateLocalStorage({
       mode: 'exchange'
    })
  },

  setEnterprise: function () {
     this.props.updateLocalStorage({
       mode: 'enterprise'
    })
  },

  render: function () {
    return (
      <div className="splitter">
        <div className="top">
          <div className="logo">
            <Icons type="cs_logo" />
          </div>
          <div className="container">
            <h2 className="h3">A Massive Commercial Lease Comps Database</h2>
            <p className="h6 grey">Nationwide • Accurate • Searchable</p>
            <div className="buttons">
              <h1 className="h6">Which are you?</h1>
              <Link to="exchange" onClick={this.setExchange}><button>Broker</button></Link>
              <Link to="exchange" onClick={this.setExchange}><button>Appraiser</button></Link>
              <Link to="exchange" onClick={this.setExchange}><button>Researcher</button></Link>
              <Link to="enterprise" onClick={this.setEnterprise}><button>Landlord</button></Link>
              <Link to="enterprise" onClick={this.setEnterprise}><button>Lender</button></Link>
              <Link to="enterprise" onClick={this.setEnterprise}><button>Investor</button></Link>
            </div>
          </div>
        </div>
        <Logos/>
      </div>
    );
  }
});

module.exports = Enterprise;