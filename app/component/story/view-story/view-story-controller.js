'use strict';

module.exports = {
  template: require('./view-story.html'),
  controllerAs: 'viewStoryCtrl',
  controller: [
    '$log',
    '$window',
    '$location',
    '$rootScope',
    'storyService',
    function($log, $window, $location, $rootScope, storyService){
      this.$onInit = () => {
        $log.debug('#viewStoryCtrl');
        this.contribution = {};
        this.currentStory = JSON.parse($window.localStorage.getItem('currentStory'));
        console.log('once you\'ve gotten to a story', this.currentStory);
        console.log('the first snippet in current story', this.currentStory.startSnippet);
        console.log('the current story', this.currentStory);
      };
    },
  ],
};
