'use strict';

// require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controllerAs: 'navbarCtrl',
  controller: [
    '$log',
    '$window',
    '$location',
    '$rootScope',
    'authService',
    'storyService',
    function($log, $window, $location, $rootScope, authService, storyService) {
      this.$onInit = () => {
        $log.debug('NavbarController');

        this.checkPath = function() {
          let path = $location.path();

          if(path === '/join') {
            this.hideButtons = true;
          }

          if(path !== '/join') {
            this.hideButtons = false;
            authService.getToken()
              .catch(() => {
                $location.url('/join#login');
              });
          }
        };

        this.checkPath();

        $rootScope.$on('$locationChangeSuccess', () => {
          this.checkPath();
        });

        this.logout = function() {
          $log.log('navbarCtrl.logout()');
          this.hideButtons = true;
          authService.logout()
            .then(() => {
              $location.url('/');
            });
        };

        this.loadDashboard = () => {
          return storyService.loadDashboard()
          .then(() => {
          })
          .then(
            () => $location.url('/dashboard')
          );
        };

        // this.createStory = () => {
        //   storyCtrl.read = false;
        //   storyCtrl.edit = false;
        //   storyCtrl.create = true;
        //   console.log('in navbar createstory');
        // };
      };
    },
  ],
};
