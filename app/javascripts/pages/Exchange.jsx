'use strict';
var React = require('react');

var Exchange = React.createClass({
  
  render: function () {
    return (
      <div className="page_exchange">
        <h1>Exchange</h1>
        <p>Market: {this.props.user.market}</p> 
        <p>Mode: {this.props.user.mode}</p>

        <div className="container">
          <div className="el1"></div>
          <div className="el2"></div>
        </div>

        <div className="row">
          <div className="col three">1</div>
          <div className="col three">2</div> 
          <div className="col four">3</div>
          <div className="col two">4</div>    
        </div>

        <div className="row">
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div> 
          <div className="col one">1</div>   
        </div>
      </div>
    )
  }
});

module.exports = Exchange;