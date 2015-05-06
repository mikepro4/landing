'use strict';

var UpdateUserMixin = {
  updateUser: function(event) {
    this.props.updateLocalStorage({
      jobTitle: event.target.innerHTML,
      mode: this.getUserMode(event.target.dataset.position)
    })
  },

  getUserMode: function(position) {
    // takes this.props.jobOptions where first 3 options match exchange and the last 3 enterprise
    return (position < 3) ? "exchange" : "enterprise"
  }
}

module.exports = UpdateUserMixin;
