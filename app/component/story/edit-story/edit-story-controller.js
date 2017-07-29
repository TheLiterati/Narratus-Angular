'use strict';

require('./_edit-story.scss');

module.exports = {
  template: require('./edit-story.html'),
  controllerAs: 'editStoryCtrl',
  controller: [
    '$log',
    '$window',
    '$location',
    '$rootScope',
    'storyService',
    function($log, $window, $location, $rootScope, storyService){
      $log.debug('#editStoryCtrl');

      this.approved = false;
      this.currentStory = storyService.currentStory;

      this.currentSnippet = {};

      this.setCurrentSnippet = snippet => {
        console.log(snippet);
        this.currentSnippet = snippet;
        $window.localStorage.removeItem('currentSnippet');
        $window.localStorage.setItem('currentSnippet', this.currentSnippet);
      };

      this.approveSnippet = () => {
        console.log(this.currentStory);
        return storyService.approveSnippet(this.currentStory._id, this.currentSnippet)
        .then(() => this.approved = true)
        .then()
        .catch(err => {
          $log.error(err.message);
        });
      };


    },
  ],
};
