expose('address', ['window', function(window) {
  'use strict';

  function address() {
  }

  address.prototype.path = function() {
    return window.location.pathname;
  }

  address.prototype.pathParts = function() {
    return this.path().split('/');
  }

  return address;
}]);
