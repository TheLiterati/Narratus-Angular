'use strict';

// require('./_landing.scss')

module.exports = [
  '$log',
  // 'authService',
  function($log){
    this.$onInit = () => {
      $log.debug('#signup controller');

      this.title = 'Narratus';

    };
  },
];
