describe('Training', function () {
  // Load module, which contains the directive
  beforeEach(module('app'));

  // Test service availability
  it('check the existence of Training factory', inject(function (Training) {
    expect(Training).toBeDefined();
  }));

  describe('Trainings resource service', function () {
    var TrainingResource;
    var $httpBackend;
    var apiURL = 'https://trainings-a581.restdb.io/rest';

    beforeEach(inject(function (_Training_, _$httpBackend_) {
      TrainingResource = _Training_;
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('check if response return training by id', function () {
      var result = null;

      $httpBackend.expectGET(apiURL + '/trainings/1').respond({
        title: 'Angular'
      });

      TrainingResource.query({
        id: 1
      }).$promise.then(function (trainings) {
        result = trainings;
      });

      $httpBackend.flush();

      expect(result.title).toBe('Angular');
    });
  });
});
