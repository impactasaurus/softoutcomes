expose('http', ['fetch', function(fetch) {
  function http(options) {
    this._opts = options || {};
  }

  http.prototype.get = function(url) {
    const opts = $.extend(true, {}, this._opts);
    opts.method = 'GET';
    return fetch(url, opts);
  }

  http.prototype.getJson = function(url) {
    const adjustedUrl = url.substring(url.length - 5) === '.json' ? url : url + '.json';
    return this.get(adjustedUrl).then(r => {
      if (r.ok) { 
        return r.json();
      } else { 
	throw new Error(`Bad response ${r.status}`);
      }
    });
  }

  return http;

}]);
