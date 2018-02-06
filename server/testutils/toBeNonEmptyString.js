const { matcherHint, printReceived } = require('jest-matcher-utils');
const getType = require('jest-get-type');

const toBeNonEmptyString = (received) => {
    const type = getType(received);
    const pass = type === 'string' && !!received.length;
    const message = pass ? 
        () => `${matcherHint('.not.toBeNonEmptyString')}
        Expected value to be a non-empty string.
        Received:
        \t${printReceived(received)}` :
        () => `${matcherHint('.toBeNonEmptyString')}
        Expected value to be non-empty string.
        Received:
        \t${printReceived(received)}
        type:
        \t${printReceived(type)}`;

    return { pass, message };
}

module.exports = toBeNonEmptyString;