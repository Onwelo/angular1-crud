angular
  .module('app.main')
  .filter('humanizeIsoDuration', humanizeIsoDuration);

/** @ngInject */
function humanizeIsoDuration() {
  return function (input) {
    if (input) {
      return moment.duration(input).humanize();
    }
  };
}
