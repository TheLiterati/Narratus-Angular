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

      this.approveSnippet = () => {
        return storyService.approveSnippet(this.currentStory)
        .then(() => this.approved = true)
        .then()
        .catch(err => {
          $log.error(err.message);
        });
      };
      

    },
  ],
};
