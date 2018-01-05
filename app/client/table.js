expose('table', ['document', function(document) {
  'use strict';

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

  table.linkFormat = function(opts) {
    return function(value, element) {
      return `<a href="${value}" ${opts.target ? `target="${opts.target}"` : ""}>${value}</a>`;
    }
  }

  table.propertyFormat = function(key) {
    return function(value, element) {
      return value[key];
    }
  }

  table.listFormat = function(listItemFormat, opts) {
    return function(value, element) {
      const items = opts.property ? value[opts.property] : value;
      const liGenerator = opts.generateLi || (() => '<li>');
      const ulGenerator = opts.generateUl || (() => '<ul>');
      const mappedItems = items.map(i => `${liGenerator(i)}${listItemFormat(i)}</li>`).join('');
      return `${ulGenerator()}${mappedItems}</ul>`;
    }
  }

  function generateHeader(opts) {
    function generateHeaderCell(col) {
      return `<th>${col.title}</th>`;
    }

    if (opts.horizontal) {
      return '';
    }
    const headers = opts.cols.map(generateHeaderCell).join('');
    return `<thead><tr>${headers}</tr></thead>`;
  }

  function generateBody(opts, data) {
    function generateVerticalRow(dataElement) {
      function generateCell(col) {
        const value = dataElement[col.key];
	    col.format = col.format || ((val, element) => val);
	    const formattedValue = col.format(value, dataElement);
	    return `<td>${formattedValue}</td>`;
      }

      const cells = opts.cols.map(generateCell).join('');
      return `<tr>${cells}</tr>`;
    }

    function generateHorizontalRow(data) {
      return function(col) {
        function generateCell(dataElement) {
          const value = dataElement[col.key];
          col.format = col.format || ((val, element) => val);
          const formattedValue = col.format(value, dataElement);
          return `<td>${formattedValue}</td>`;
        }

        function generateHeaderCell() {
          return `<td>${col.title}</td>`;
        }

        const cells = [generateHeaderCell(), ...data.map(generateCell)].join('');
        return `<tr>${cells}</tr>`;
      }
    }

    const body = opts.horizontal ? opts.cols.map(generateHorizontalRow(data)) : data.map(generateVerticalRow);
    return `<tbody>${body.join('')}</tbody>`;
  }

  function generateTable(opts, header, body) {
    return `<div class="table-wrapper"><table>${header}${body}</table></div>`
  }

  return table;
}]);
