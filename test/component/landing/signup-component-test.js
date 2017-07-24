'use strict';

const expect = require('chai').expect;

describe('Testing the Signup controller', function(){
  beforeEach(done => {
    angular.mock.module('narratus');
    angular.mock.inject(($rootScope, $componentController, $window, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
      this.signupCtrl = $componentController('signupController');
    });
    this.signupCtrl.$onInit();
    done();
  });

  afterEach(done => {
    this.$window.localStorage.removeItem('token');
    done();
  });

  describe('testing signupCtrl.signup()', () => {
    it('should POST sign up, and return user token', done => {
      this.$window.localStorage.token = null;
      let expectUser = {
        username: 'testname',
        email: 'test@test.com',
        password: 'password',
      };

      let expectUrl = 'http://localhost:3000/api/signup';
      let expectConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      };

      this.$httpBackend.whenPOST(expectUrl, expectUser, expectConfig).respond(200, 'user token');

      this.signupCtrl.signup(expectUser).then(() => {
        expect(this.$window.localStorage.token).to.equal('user token');
        this.$httpBackend.flush();
        this.$rootScope.$apply();
      });
      done();
    });
    it('should have a page title of "welcome to narratus"', done => {
      expect(this.signupCtrl.title).to.equal('Welcome to Narratus');
      expect(this.signupCtrl.title).to.be.a('string');
      done();
    });
  });

});
