(function () {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Trainings) {
    var vm = this;
    vm.trainings = Trainings.query();
  }
})();
