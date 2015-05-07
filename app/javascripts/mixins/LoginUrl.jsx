'use strict';

var LoginUrlMixin = {
  getLoginUrl: function(context) {
    switch(context) {
      case "enterprise": 
        return "https://enterprise.compstak.com/"
      case "exchange":
        return "https://exchange.compstak.com/"
    }
  }
}

module.exports = LoginUrlMixin;