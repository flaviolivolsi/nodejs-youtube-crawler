var crawl = require('./index');

crawl('Cool cats').then(function(results) {
  console.log(results);
}).catch(function(error) {
  console.error(error);
});
