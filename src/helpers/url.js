const slgify = require('slugify');

// not using export as it is used within gatsby-node.js
module.exports = {
  slugify: (str) => slgify(str, {lower: true})
};
