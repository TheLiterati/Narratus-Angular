'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location){
    this.$onInit = () => {
      $log.debug('#feed controller');

      this.title = 'Narratus Feed';

      let url = $location.url();
      // this.showSignup = url = '/feed' || url === '/join';
    };
  },
];
