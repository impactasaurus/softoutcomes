const { toBeType } = require('jest-tobetype');
const { toBeNonEmptyString } = require('./testutils');
expect.extend({
    toBeType,
    toBeNonEmptyString,
});