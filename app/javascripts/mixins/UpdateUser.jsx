'use strict';

var UpdateUserMixin = {
  updateUser: function(event) {
      this.props.updateLocalStorage({
        jobTitle: event.target.innerHTML,
        mode: this.getUserMode(event.target.innerHTML)
      })
    },

  getUserMode: function(jobTitle) {
    switch(jobTitle) {
      case "Broker":
      case "Appraiser":
      case "Researcher":
        return "exchange";
      case "Landlord":
      case "Lender":
      case "Investor":
        return "enterprise";
    }
  }
}

module.exports = UpdateUserMixin;
