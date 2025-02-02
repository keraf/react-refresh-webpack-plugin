const getParserHelpers = require('./getParserHelpers');
const getRefreshGlobal = require('./getRefreshGlobal');
const getSocketIntegration = require('./getSocketIntegration');
const injectRefreshEntry = require('./injectRefreshEntry');
const injectRefreshLoader = require('./injectRefreshLoader');
const normalizeOptions = require('./normalizeOptions');
const getAdditionalEntries = require('./getAdditionalEntries');

module.exports = {
  getParserHelpers,
  getRefreshGlobal,
  getSocketIntegration,
  injectRefreshEntry,
  injectRefreshLoader,
  normalizeOptions,
  getAdditionalEntries,
};
