'use strict';

var TouchMixin = {
  touched: false,

  handleTouch: function(fn) {
    this.touched = true;
    typeof fn === 'string' ? this[fn]() : this.event(fn);
  },
  handleClick: function(fn) {
    if (this.touched) return this.touched = false;
    typeof fn === 'string' ? this[fn]() : this.event(fn);
  },
}

module.exports = TouchMixin;