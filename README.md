## youtube-crawl

YouTube crawler with promise.

### Usage
```javascript
var crawl = require('youtube-crawl');

crawl('Cool cats')
  .then(function(results) {
    console.log(results);
  })
  .catch(function(error) {
    console.error(error);
  });
```

### License
Check the `LICENSE.md` file.

Copyright (c) 2017 Flavio Li Volsi <flavio.livolsi@gmail.com>
