const fs = require('fs');
const path = require('path');
const fileHound = require('filehound');

exports.galleryList = function(dir) {
  const subdirectories = fileHound.create()
    .path(dir)
    .directory()
    .findSync()
    .map(function(x) {
      const title = getGalleryTitle(x.split('/').pop());
      const pics = getPictures(x);
      return { "title": title, "pics": pics };
    });

  return(subdirectories);
};

getPictures = function(dir) {
  console.log(dir);
  const pics = fileHound.create()
    .path(dir)
    .ext('jpg')
    .findSync()
    .map(function(x) {
      return x.split('/').pop();
    });

  return pics;
};

getGalleryTitle = function(dir) {
  return dir.split('/').pop().split('-').pop();
};
