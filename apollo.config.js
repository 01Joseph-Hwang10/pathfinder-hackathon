const Constants = require('./modules/constants');

module.exports = {
  client: {
    service: {
      name: 'backend',
      url: Constants.GRAPHQL_ENDPOINT,
    },
    includes: ['./src/**/*.tsx'],
    tagName: 'gql',
  }
};