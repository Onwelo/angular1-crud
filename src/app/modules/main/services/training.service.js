(function () {
  'use strict';

  angular
    .module('app.main')
    .factory('Training', Training);

  /** @ngInject */
  function Training($resource, appConfig) {
    return $resource(appConfig.API_URL + 'trainings/:id', {id: '@id'}, {
      query: {
        method: 'GET',
        headers: {
          'X-APIKEY': appConfig.API_KEY
        },
        isObject: true
      }
    });
  }
})();
