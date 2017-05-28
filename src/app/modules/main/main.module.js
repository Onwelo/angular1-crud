(function () {
  'use strict';

  angular
    .module('app.main', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('app.main', {
        url: '/',
        views: {
          'header@': {
            template: '<ot-header></ot-header>'
          },
          'content@': {
            templateUrl: 'app/modules/main/main.html',
            controller: 'MainController as vm',
            resolve: {
              trainings: function (Trainings) {
                return Trainings.query();
              }
            }
          }
        }
      })
      .state('app.main.training', {
        url: '^/training/:id',
        views: {
          'header@': {
            template: '<ot-header></ot-header>'
          },
          'content@': {
            templateUrl: 'app/modules/main/training.html',
            controller: 'TrainingController as vm',
            resolve: {
              training: function (Training, $stateParams) {
                return Training.query({id: $stateParams.id});
              }
            }
          }
        }
      });
  }
})();
