'use strict';

const expect = require('chai').expect;

describe('Testing the contribute controller', function() {
  beforeEach(done => {
    angular.mock.module('narratus');
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.$componentController = $componentController;
      this.contributeCtrl = $componentController('contribute');
    });

    this.contributeCtrl.$onInit();
    this.$window.localStorage.setItem('token', 'test token');
    done();
  });

  afterEach(done => {
    this.$window.localStorage.removeItem('token');
    this.$httpBackend.flush();
    this.$rootScope.$apply();
  });

  


});
