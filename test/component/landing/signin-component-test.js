'use strict';

describe('Testing the Signin controller', function(){
  beforeEach(() => {
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
  });

  afterEach(() => {
    this.$window.localStorage.removeItem('token');
  });

  describe('testing signinCtrl.signin()', () => {
    it('should GET sign in, and return user token', () => {
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
    });
    it('should have a page title of "welcome to narratus"', () => {
      expect(this.signinCtrl.title).toEqual('Welcome to Narratus');
      expect(this.signinCtrl.title).toEqual(jasmine.any(String));
    });
  });

});
