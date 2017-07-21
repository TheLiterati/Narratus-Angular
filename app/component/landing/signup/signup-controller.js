'use strict';

// require('./_signup.scss');

module.exports = {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: [
    '$log',
    '$location',
    '$window',
    'authService',
    function($log, $location, $window, authService){
      this.$onInit = () => {
        $log.debug('#signupCtrl');
        // authService.getToken()
        // .then(() => $location.url('/feed'));

        this.title = '';

        this.signup = function(user){
          $log.debug('#signupCtrl.signup()');

          authService.signup(user)
          .then(() => $location.url('/feed'));
        };
      };
    },
  ],
};
