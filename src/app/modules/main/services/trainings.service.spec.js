describe('Trainings', function () {
  // Load module, which contains the directive
  beforeEach(module('app'));

  // Test service availability
  it('check the existence of Trainings factory', inject(function (Trainings) {
    expect(Trainings).toBeDefined();
  }));

  describe('Trainings resource service', function () {
    var TrainingsResource;
    var $httpBackend;
    var apiURL = 'https://trainings-a581.restdb.io/rest';

    beforeEach(inject(function (_Trainings_, _$httpBackend_) {
      TrainingsResource = _Trainings_;
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('check if response gonna be send to endpoint', function () {
      $httpBackend.expectGET(apiURL + '/trainings').respond([]);
      TrainingsResource.query();
      $httpBackend.flush();
    });

    // it('check if response return trainings by title', inject(function ($q) {
    //   var result = null;
    //
    //   spyOn(TrainingResource, 'query').andReturn({
    //     $promise: $q.when([{
    //       title: 'Angular'
    //     }])
    //   });
    //
    //   $httpBackend.expectGET(apiURL + '/trainings/1').respond({
    //     title: 'Angular'
    //   });
    //
    //   TrainingResource.query({
    //     id: 1
    //   }).$promise.then(function (trainings) {
    //     result = trainings;
    //   });
    //
    //   $httpBackend.flush();
    //
    //   expect(result.title).toBe('Angular');
    // }));
  });
});
