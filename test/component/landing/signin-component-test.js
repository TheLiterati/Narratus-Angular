'use strict';

const expect = require('chai').expect;

describe('Testing the Signin controller', function(){
  beforeEach(done => {
    angular.mock.module('narratus');
    angular.mock.inject(($rootScope, $componentController, $window, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
      this.signinCtrl = $componentController('signinController');
    });

    this.signinCtrl.$onInit();
    this.$window.localStorage.setItem('token', 'user token');
    done();
  });

  afterEach(done => {
    this.$window.localStorage.removeItem('token');
    done();
  });

  describe('testing signinCtrl.signin()', () => {
    it('should GET sign in, and return user token', done => {
      let expectUser = {
        username: 'testname',
        email: 'test@test.com',
        password: 'password',
      };

      let expectUrl = 'http://localhost:3000/api/signin';
      let base64 = this.$window.btoa(`${expectUser.username}:${expectUser.password}`);
      let expectConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Basic ${base64}`,
        },
      };

      this.signinCtrl.user = expectUser;

      this.$httpBackend.expectGET(expectUrl, expectUser, expectConfig).respond(200, 'user token');
      this.signinCtrl.signin().then(() => {
        expect(this.$window.localStorage.token).toEqual('user token');
        this.$httpBackend.flush();
        this.$rootScope.$apply();
      });
      done();
    });
    it('should have a page title of "welcome to narratus"', done => {
      expect(this.signinCtrl.title).to.equal('Welcome to Narratus');
      expect(this.signinCtrl.title).to.be.a('string');
      done();
    });
  });

});
