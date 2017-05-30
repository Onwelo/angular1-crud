(function () {
  'use strict';

  angular
    .module('app.main')
    .controller('TrainingController', TrainingController);

  /** @ngInject */
  function TrainingController(training, Reservation) {
    var vm = this;

    vm.training = training;
    vm.trainee = {
      training_id: vm.training._id
    };

    vm.makeReservation = makeReservation;

    function makeReservation() {
      Reservation.save(vm.trainee);
    }
  }
})();
