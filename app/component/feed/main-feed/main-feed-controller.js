'use strict';

require('./_main-feed.scss');

module.exports = {
  template: require('./main-feed.html'),
  controllerAs: 'mainFeedCtrl',
  controller: [
    '$log',
    '$rootScope',
    '$location',
    'storyService',
    function($log, $rootScope, $location, storyService){
      this.$onInit = () => {
        this.library = [];
        this.loadFeed = () => {
          return storyService.fetchStories()
          .then(stories => {
            this.library = stories;
            console.log('these is stories', stories);
            console.log('dis is library', this.library);
            return this.library;
          });
        };
        
        $rootScope.$on('locationChangeSuccess', this.loadFeed);
        this.loadFeed();
      };
    },
  ],
};
