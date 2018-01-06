expose('text', ['document', function(document) {
  'use strict';

  function text(id) {
    this.id = id;
  }

  text.prototype.render = function(text) {
    const el = document.getElementById(this.id);
    if (el) {
      el.textContent = text;
    }
  }

  return text;

}]);
