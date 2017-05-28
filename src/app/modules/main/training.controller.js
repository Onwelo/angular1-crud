(function () {
  'use strict';

  angular
    .module('app.main')
    .controller('TrainingController', TrainingController);

  /** @ngInject */
  function TrainingController(Training, $stateParams) {
    var vm = this;
    vm.training = Training.query({id: $stateParams.id});
  }
})();
