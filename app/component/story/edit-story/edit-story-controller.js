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
        this.chosenSnippet = snippet;
        console.log('chosen snippet', this.chosenSnippet);
        $window.localStorage.removeItem('chosenSnippet');
        $window.localStorage.setItem('chosenSnippet', this.chosenSnippet);
      };

      this.approveSnippet = () => {
        console.log('this is the currentStory', this.currentStory);
        console.log('this is the currentStory._id', this.currentStory._id);
        console.log('this is the chosenSnippet', this.chosenSnippet);
        return storyService.approveSnippet(this.currentStory._id, this.chosenSnippet._id)
        .then(() => this.approved = true)
        .catch(err => {
          $log.error(err.message);
        });
      };


    },
  ],
};
