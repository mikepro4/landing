'use strict';

var MobileCheckMixin = {
   checkMobile: function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }
}

module.exports = MobileCheckMixin;