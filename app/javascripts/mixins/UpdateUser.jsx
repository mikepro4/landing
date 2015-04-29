'use strict';

var UpdateUserMixin = {
  updateUser: function(event) {
      this.props.updateLocalStorage({
        jobTitle: event.target.innerHTML,
        mode: this.getUserMode(event.target.dataset.position)
      })
    },

  getUserMode: function(position) {
     return (position < 3) ? "exchange" : "enterprise"
  }
}

module.exports = UpdateUserMixin;
