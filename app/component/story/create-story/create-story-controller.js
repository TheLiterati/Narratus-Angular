'use strict';

require('./_create-story.scss');

module.exports = {
  template: require('./create-story.html'),
  controllerAs: 'createStoryCtrl',
  controller: [
    '$log',
    '$rootScope',
    '$location',
    'storyService',
    function($log, $rootScope, $location, storyService) {
      this.$onInit = () => {
        $log.debug('CreateStoryController');

        this.story = {};

        this.createStory = function(){
          return storyService.createStory(this.story)
            .then(() => {
              let res = this.story;
              this.story.title = null;
              this.story.description = null;
              this.story.startSnippet = null;

              $rootScope.$emit('new story created');
              return res;
            })
            .then(() => $location.url('/dashboard'))
            .catch(err => $log.error(err));
        };
      };
    },
  ],
};
