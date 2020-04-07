const path = require('path'),
  url = require('./src/helpers/url');

exports.createPages = async ({ actions, graphql }) => {
  const questionnaires = [];
  const limit = 10;
  let page = 0;
  while (true) {
    const { data } = await graphql(`
      query {
        softoutcomes {
          questionnaires(page:${page}, limit:${limit}) {
            questionnaires {
              id
              name
            }
          }
        }
      }
    `);
    const newQuestionnaires = data.softoutcomes.questionnaires.questionnaires;
    questionnaires.push(...newQuestionnaires);
    if (newQuestionnaires.length !== limit) {
      break;
    }
    page++;
  }
  const numPages = page + 1;
  questionnaires.forEach(({ id, name }) => {
    actions.createPage({
      path: `questionnaires/${url.slugify(name)}`,
      component: path.resolve(`./src/templates/questionnaire.js`),
      context: {
        id,
      },
    });
  });
  for(let ct = 0; ct < numPages; ct++) {
    actions.createPage({
      path: `questionnaires/${ct+1}`,
      component: path.resolve(`./src/templates/questionnaires.js`),
      context: {
        limit,
        page: ct,
        numPages: numPages
      },
    });
  }
  actions.createPage({
    path: `questionnaires`,
    component: path.resolve(`./src/templates/questionnaires.js`),
    context: {
      limit,
      page: 0,
      numPages: numPages
    },
  });
}
