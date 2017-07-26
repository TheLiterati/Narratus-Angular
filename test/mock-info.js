// 'use strict';
//
// let mock = module.exports = {};
//
// mock.injection = () => {
//   angular.mock.inject(($rootScope, $window) => {
//     mock.$rootScope = $rootScope;
//     mock.$window = $window;
//   });
// };
//
// mock.user = {
//   username: 'testuser',
//   email: 'testemail',
//   password: 'testpassword',
// };
//
// let base64 = mock.$window.btoa(`${mock.user.username}:${mock.user.password}`);
//
// mock.story = {
//   title: 'test title',
//   description: 'my story',
//   startSnippet: 'the start',
// };
//
// mock.noAuthHeaders = {
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// };
//
// mock.basicAuthHeaders = {
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: `Basic ${base64}`,
//   },
// };
//
// mock.bearerAuthHeaders = {
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${mock.$window.localStorage.token}`,
//   },
// };
