(function () {
  'use strict';

  angular
    .module('app.main')
    .factory('Trainings', Trainings);

  /** @ngInject */
  function Trainings($resource, appConfig) {
    return $resource(appConfig.API_URL + 'trainings', {}, {
      query: {
        method: 'GET',
        headers: {
          'X-APIKEY': appConfig.API_KEY
        },
        isArray: true
      }
    });
  }
})();
