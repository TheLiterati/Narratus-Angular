'use strict';

// require('./_dashboard.scss');

module.exports = [
  '$log',
  '$window',
  '$location',
  '$rootScope',
  'storyService',
  function($log, $window, $location, $rootScope, storyService) {
    this.$onInit = () => {
      $log.debug('Dashboard Controller');
      this.title = 'Welcome to your Dashboard';

      this.ownedStories = JSON.parse($window.localStorage.ownedStories);
      this.followedStories = JSON.parse($window.localStorage.followedStories);

      // console.log('yayyyyy', this.ownedStories, this.followedStories);

    };
  },
];
