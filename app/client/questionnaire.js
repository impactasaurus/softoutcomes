resolve(['http', 'address', 'table', 'hiddenToggle', 'text', function(Http, Address, Table, HiddenToggle, Text) {
  'use strict';

  const spinnerHiddenToggle = new HiddenToggle('spinner');
  const questionTable = new Table('questionnaireTable', {
    cols: [
      { title: 'Question', key: 'text' },
      { title: 'Left score', key: 'left', format: scoreFormat },
      { title: 'Right score', key: 'right', format: scoreFormat },
      { title: 'Categories', key: 'categories' }
    ]
  });
  const questionTableHiddenToggle = new HiddenToggle('questionnaireTable');
  const detailsTable = new Table('detailTable', {
    cols: [
      { title: 'PDF Link', key: 'pdfLink', format: Table.linkFormat({target: "_blank"}) },
      { title: 'Sectors', key: 'sectors' },
      { title: 'Demographic', key: 'demographic' },
      { title: 'Scoring', key: 'scoring', format: Table.propertyFormat('aggregation') },
      { title: 'Scoring bands', key: 'scoring', format: Table.listFormat(i => `${i.minimum} - ${i.maximum}: ${i.label}`, {
        generateUl: () => `<ul class="alt">`,
        property: 'bands'
      })}
    ],
    horizontal: true
  });
  const detailsTableHiddenToggle = new HiddenToggle('detailTable');
  const titleText = new Text('title');
  const subtitleText = new Text('subtitle');
  const subtitleHiddenToggle = new HiddenToggle('subtitle');

  function scoreFormat(value, element) {
    return `${value.label} (${value.score})`;
  }

  const questionnaire = (function() {
    const pathParts = new Address().pathParts();
    return pathParts[pathParts.length - 1];
  })();

  new Http().getJson(`/api/questionnaire/${questionnaire}`).then(r => {
    questionTable.bind(r.questions);
    questionTable.render();
    detailsTable.bind([r]);
    detailsTable.render();
    titleText.render(r.name);
    subtitleText.render(r.description);
    spinnerHiddenToggle.hide();
    questionTableHiddenToggle.show();
    detailsTableHiddenToggle.show();
    subtitleHiddenToggle.show();
  });
}]);
