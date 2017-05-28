describe('ot-header component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('otHeader', function () {
      return {
        templateUrl: 'app/modules/main/components/ot-header/ot-header.html'
      };
    });
  }));
  it('should render', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<ot-header></ot-header>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
