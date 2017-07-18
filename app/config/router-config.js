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
        template: require('../view/dashboard/landing.html'),
        controller: 'LandingController',
        controllerAs: 'landingCtrl',
      },
    ];
    routes.forEach(route => $stateProvider.state(route));
  },
];
