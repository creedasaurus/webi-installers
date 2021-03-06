'use strict';

var github = require('../_common/github.js');
var owner = 'mutagen-io';
var repo = 'mutagen';

module.exports = function (request) {
  return github(request, owner, repo).then(function (all) {
    return all;
  });
};

if (module === require.main) {
  module.exports(require('@root/request')).then(function (all) {
    all = require('../_webi/normalize.js')._debug(all);
    console.info(JSON.stringify(all, null, 2));
  });
}
