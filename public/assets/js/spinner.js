expose('hiddenToggle', ['document', (function(document) {

  function hiddenToggle(id) {
    this._id = id;
  }

  hiddenToggle.prototype.hide = function() {
    setHidden(this._id, true);
  }

  hiddenToggle.prototype.show = function() {
    setHidden(this._id, false);
  }

  function setHidden(id, hidden) {
    const el = document.getElementById(id);
    if (el) {
      el.hidden = hidden;
    }
  }

  return hiddenToggle;
})]);
