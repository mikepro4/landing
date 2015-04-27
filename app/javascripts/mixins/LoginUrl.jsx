'use strict';

var LoginUrlMixin = {
  getLoginUrl: function(context) {
    switch(context){
      case "enterprise": 
        return "https://enterprise.compstak.com/"
        break
      case "exchange":
        return "https://exchange.compstak.com/"
        break
    }
  }
}

module.exports = LoginUrlMixin;