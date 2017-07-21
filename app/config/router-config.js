'use strict';

module.exports = [
  '$stateProvider',
  '$urlServiceProvider',
  function($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.when('', '/join#signup');
    $urlServiceProvider.rules.when('/', '/join#signup');
    $urlServiceProvider.rules.when('/signup', '/join#signup');
    $urlServiceProvider.rules.when('/login', '/join#login');

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
        url: '', // NOTE: determine route
        template: require('../view/dashboard/dashboard.html'),
        controller: 'DashboardController',
        controllerAs: 'dashboardCtrl',
      },
      {
        name: 'feed',
        url: '/feed', // NOTE: determine route
        template: require('../view/feed/feed.html'),
        controller: 'FeedController',
        controllerAs: 'feedCtrl',
      },
      {
        name: 'story',
        url: '', // NOTE: determine route
        template: require('../view/story/story.html'),
        controller: 'storyController',
        controllerAs: 'storyCtrl',
      },
    ];
    routes.forEach(route => $stateProvider.state(route));
  },
];
