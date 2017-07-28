'use strict';

module.exports = [
  '$stateProvider',
  '$urlServiceProvider',
  function($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.when('', '/join#signup');
    $urlServiceProvider.rules.when('/', '/join#signup');
    $urlServiceProvider.rules.when('/signup', '/join#signup');
    $urlServiceProvider.rules.when('/signin', '/join#signin');

    let routes = [
      {
        name: 'landing',
        url: '/join',
        template: require('../view/landing/landing.html'),
        controller: 'LandingController',
        controllerAs: 'landingCtrl',
      },
      {
        name: 'dashboard',
        url: '/dashboard',
        template: require('../view/dashboard/dashboard.html'),
        controller: 'DashboardController',
        controllerAs: 'dashboardCtrl',
      },
      {
        name: 'library',
        url: '/library',
        template: require('../view/library/library.html'),
        controller: 'LibraryController',
        controllerAs: 'libraryCtrl',
      },
      {
        name: 'story',
        url: '/story',
        template: require('../view/story/story.html'),
        controller: 'StoryController',
        controllerAs: 'storyCtrl',
      },
    ];
    routes.forEach($stateProvider.state);
  },
];
