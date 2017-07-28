'use strict';

require('./_signin.scss');

module.exports = {
  template: require('./signin.html'),
  controllerAs: 'signinCtrl',
  controller: [
    '$log',
    '$location',
    '$window',
    'authService',
    function($log, $location, $window, authService) {
      this.$onInit = () => {
        $log.debug('signinCtrl');

        this.title = 'Welcome to Narratus';

        if(!$window.localStorage.token) {
          authService.getToken()
            .then(
              () => $location.url('/dashboard'),
              () => $location.url('/signup')
            );
        }

        this.signin = function() {
          $log.debug('signinCtrl.signin()');

          return authService.signin(this.user)
            .then(() => $location.url('/feed'));
        };
      };
    },
  ],
};
