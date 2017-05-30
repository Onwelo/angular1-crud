(function () {
  'use strict';

  angular
    .module('app.main')
    .factory('Reservation', Reservation);

  /** @ngInject */
  function Reservation($resource, appConfig) {
    return $resource(appConfig.API_URL + 'reservations', {}, {
      save: {
        method: 'POST',
        headers: {
          'X-APIKEY': appConfig.API_KEY
        },
        isObject: true
      }
    });
  }
})();
