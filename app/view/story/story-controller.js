'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location) {
    this.$onInit = () => {
      $log.debug('CreateController');

      this.title = 'Welcome to Narratus';

      // let url = $location.url();
    };
  },
];
