angular
  .module('app')
  .provider('appConfig', configProvider);

/** @ngInject */
function configProvider() {
  var config = {
    ENV_DEV: true,
    API_URL: 'https://trainings-a581.restdb.io/rest/',
    API_KEY: '5929ba099fecb2d91b86441a',
    set: function (settings) {
      angular.extend(this, settings);
    },
    $get: function () {
      return this;
    }
  };

  return config;
}
