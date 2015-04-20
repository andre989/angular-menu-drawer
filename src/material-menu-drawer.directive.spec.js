'use strict';

describe('Directive: menuMobileAgrigelateria', function () {

  // load the directive's module and view
  beforeEach(module('agrigelateriaApp'));
  beforeEach(module('components/menu-mobile-agrigelateria/menu-mobile-agrigelateria.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menu-mobile-agrigelateria></menu-mobile-agrigelateria>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the menuMobileAgrigelateria directive');
  }));
});