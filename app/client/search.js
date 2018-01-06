resolve(['hiddenToggle', 'table', 'http', function(HiddenToggle, Table, Http) {
  'use strict';
  const spinnerHiddenToggle = new HiddenToggle('spinner');
  const table = new Table('catalogueTable', {
    cols: [
      { title: '', key: 'logo', format: logoFormat },
      { title: 'Name', key: 'name', format: titleLinkFormat },
      { title: 'Description', key: 'description' },
      { title: 'Number of questions', key: 'length' },
      { title: 'Demographic', key: 'demographic' },
      { title: 'Sectors', key: 'sectors' }
    ]
  });
  const tableHiddenToggle = new HiddenToggle('catalogueTable');

  function titleLinkFormat(value, element) {
    return `<a href="/questionnaire/${element.key}">${value}</a>`;
  }

  function logoFormat(value, element) {
    return `<img src="/assets/logos/${value}" alt="Logo for ${element.name}" style="width: 80px;"/>`;
  }

  new Http().getJson('/api/catalogue').then(r => {
    table.bind(r);
    table.render();
    spinnerHiddenToggle.hide();
    tableHiddenToggle.show();
  });

}]);

