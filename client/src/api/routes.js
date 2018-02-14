'use strict';
module.exports = function(app) {
  const galleries = require('./controllers/galleriesController');

  app.route('/galleries')
    .get(galleries.getGalleries);
};
