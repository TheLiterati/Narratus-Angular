'use strict';

module.export = [
  '$log',
  function($log) {
    this.$onInit = () => {
      $log.debug('CreateController');
    };
  },
];
