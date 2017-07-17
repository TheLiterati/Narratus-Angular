'use strict';

const expect = require('chai').expect;

describe('Testing the Landing', function(){
  beforeEach(done => {
    angular.mock.module('narratus');
    angular.mock.inject(($rootScope, $controller, $window, $httpBackend) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.landingCtrl = new $controller('LandingController');
      done();
    });
  });
  afterEach(done => {
    done();
  });

  describe('Testing the title to get travis to do stuff', () => {
    beforeEach(done => {
      this.landingCtrl.$onInit();
      done();
    });

    it('should have the title', done => {
      expect(this.landingCtrl.title).to.equal('Narratus');
      done();
    });
  });


});
