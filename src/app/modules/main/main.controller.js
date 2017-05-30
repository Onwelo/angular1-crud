(function () {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(trainings) {
    var vm = this;

    vm.trainings = trainings;
  }
})();
