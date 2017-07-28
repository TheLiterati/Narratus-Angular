'use strict';

// require('./_dashboard.scss');

module.exports = [
  '$log',
  // 'libraryService',
  function($log) {
    this.$onInit = () => {
      $log.debug('Dashboard Controller');

      this.title = 'Welcome to your Dashboard';
    };
  },
];
