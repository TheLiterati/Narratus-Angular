'use strict';

// require('./_landing.scss')

module.exports = [
  '$log',
  '$location',
  function($log, $location){
    this.$onInit = () => {
      $log.debug('#signup controller');

      this.title = 'Narratus';

      let url = $location.url();
      this.showSignup = url = '/join#signup' || url === '/join';
    };
  },
];
