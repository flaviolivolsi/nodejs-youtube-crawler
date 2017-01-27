var https = require('https');
var cheerio = require('cheerio');
var Promise = require('bluebird');

module.exports = function (query) {
  return new Promise(function (resolve, reject) {
    try {
      https.get('https://www.youtube.com/results?search_query=' + query, function(res) {
        var data = '';
        var results = [];

        res.on('data', function(chunk) {
          data += chunk;
        });

        res.on('end', function() {
          var $ = cheerio.load(data);
          var videos = $('.yt-lockup-video');

          for (i = 0; i < videos.length; i++) {
            var uri = $(videos[i]).find('.yt-uix-sessionlink').attr('href');
            if (!uri.startsWith('/watch')) { continue; }

            results.push({
              title: $(videos[i]).find('.yt-lockup-title a').text(),
              uri: 'https://youtube.com' + uri
            });
          }

          resolve(results);
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};
