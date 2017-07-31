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
      this.currentStory = JSON.parse($window.localStorage.currentStory);

      this.chosenSnippet = {};

      this.setChosenSnippet = snippet => {
        this.currentSnippet = snippet;
        console.log('current snippet', this.currentSnippet);
        $window.localStorage.removeItem('currentSnippet');
        $window.localStorage.setItem('currentSnippet', this.currentSnippet);
      };

      this.approveSnippet = () => {
        console.log(this.currentStory);
        return storyService.approveSnippet(this.currentStory._id, this.currentSnippet)
        .then(() => this.approved = true)
        .catch(err => {
          $log.error(err.message);
        });
      };


    },
  ],
};
