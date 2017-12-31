expose('table', ['document', function(document) {

  function table(id, options) {
    this._id = id;
    this._opts = options;
  }

  table.prototype.bind = function(data, refreshStructure) {
    this.data = data;
  }

  table.prototype.render = function() {
    const anchor = document.getElementById(this._id);
    if (anchor) {
      const header = generateHeader(this._opts);
      const body = generateBody(this._opts, this.data);
      const wrapper = generateTable(this._opts, header, body);
      anchor.innerHTML = wrapper;
    }
  }

  function generateHeader(opts) {
    function generateHeaderCell(col) {
      return `<th>${col.title}</th>`;
    }

    const headers = opts.cols.map(generateHeaderCell).join('');
    return `<thead><tr>${headers}</tr></thead>`;
  }

  function generateBody(opts, data) {
    function generateRow(dataElement) {
      function generateCell(col) {
        const value = dataElement[col.key];
	col.format = col.format || ((val, element) => val);
	const formattedValue = col.format(value, dataElement);
	return `<td>${formattedValue}</td>`;
      }

      const cells = opts.cols.map(generateCell).join('');
      return `<tr>${cells}</tr>`;
    }

    const body = data.map(generateRow).join('');
    return `<tbody>${body}</tbody>`;
  }

  function generateTable(opts, header, body) {
    return `<div class="table-wrapper"><table>${header}${body}</table></div>`
  }

  return table;
}]);
