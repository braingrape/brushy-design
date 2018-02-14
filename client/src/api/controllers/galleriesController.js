'use strict';
const galleryFolder = '/src/assets/projects';
const util = require('../util');

exports.getGalleries = function(req, res) {
  // res.json({"foo": "bar"});
  const list = util.galleryList(process.cwd() + galleryFolder);
  res.json(list);
};

