'use strict';

// require('./_dashboard.scss');

module.exports = [
  '$log',
  // 'feedService',
  function($log) {
    this.$onInit = () => {
      $log.debug('Dashboard Controller');

      this.title = 'Welcome to your Dashboard';
    };
  },
];
