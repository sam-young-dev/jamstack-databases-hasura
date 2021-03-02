// Filters
const currencyFilter = require('./src/filters/currency-filter.js');

module.exports = (config) => {
  config.addFilter('currencyFilter', currencyFilter);

  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/js');

  return {
    dir: {
      input: 'src',
    },
  };
};
