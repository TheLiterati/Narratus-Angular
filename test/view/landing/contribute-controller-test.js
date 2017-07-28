// 'use strict';
//
// const expect = require('chai').expect;
//
// describe('Testing the contribute controller', function() {
//   beforeEach(done => {
//     angular.mock.module('narratus');
//     angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
//       this.$rootScope = $rootScope;
//       this.$httpBackend = $httpBackend;
//       this.$window = $window;
//       this.$componentController = $componentController;
//       this.contributeCtrl = $componentController('contribute');
//     });
//
//     this.contributeCtrl.$onInit();
//     this.$window.localStorage.setItem('token', 'test token');
//     done();
//   });
//
//   afterEach(done => {
//     this.$window.localStorage.removeItem('token');
//     this.$httpBackend.flush();
//     this.$rootScope.$apply();
//     done();
//   });
//
//   describe('Testing the createSnippet() method', () => {
//     it('should make a valid POST request to contribute a snippet to a story', done => {
//       let expectUrl = `${__API_URL__}/api/snippet`;
//
//       let expectHeader = {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${this.$window.localStorage.token}`,
//       };
//
//       let expectSnippet = {
//         snippetContent: 'And then the murders began...',
//       };
//
//       this.$httpBackend.expectPOST(expectUrl, expectHeader, expectSnippet).respond(200, expectSnippet);
//       this.createSnippet.snippet = expectSnippet;
//       expect(this.contributeCtrl.createSnippet).not.to.throw();
//
//       done();
//     });
//   });
// });
