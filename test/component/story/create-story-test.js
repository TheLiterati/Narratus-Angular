// 'use strict';
//
// const expect = require('chai').expect;
//
// describe.only('Testing the create story component', function(){
//   beforeEach(done => {
//     angular.mock.module('narratus');
//     angular.mock.inject(($rootScope, $httpBackend, $window, $componentController, authService) => {
//       this.$rootScope = $rootScope;
//       this.$httpBackend = $httpBackend;
//       this.$window = $window;
//       this.$componentController = $componentController;
//       this.createStoryCtrl = $componentController('createStoryController');
//       this.authService = authService;
//     });
//     this.createStoryCtrl.$onInit();
//     this.$window.localStorage.setItem('token', 'test token');
//     done();
//   });
//   afterEach(done => {
//     this.$window.localStorage.removeItem('token');
//     done();
//   });
//
//   describe('creating a story', () => {
//     it('should post a story and return 200', done => {
//       let expectUrl = `${__API_URL__}/api/story`;
//
//       let expectStory = {
//         title: 'title',
//         description: 'description',
//         startSnippet: 'startSnippet',
//       };
//
//       let expectConfig = {
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${this.$window.localStorage.token}`,
//         },
//       };
//
//       this.createStoryCtrl.story = expectStory;
//
//       this.$httpBackend.expectPOST(expectUrl, expectStory, expectConfig).respond(200, expectStory);
//       console.log('before:', this.createStoryCtrl.story);
//       console.log('after:', this.createStoryCtrl.story);
//       expect(this.createStoryCtrl.createStory).to.not.throw();
//       done();
//     });
//   });
//
//
// });
