'use strict';

// require('./_contribute.scss');

module.exports = {
  template: require('./contribute.html'),
  controllerAs: 'contributeCtrl',
  controller: [
    '$log',
    '$window',
    '$location',
    '$rootScope',
    'storyService',
    function($log, $window, $location, $rootScope, storyService) {
      this.$onInit = () => {
        $log.debug('ContributeController');

        this.snippet = {};
        this.currentStory = JSON.parse($window.localStorage.getItem('currentStory'));

        this.createSnippet = function() {
          return storyService.createSnippet(this.currentStory._id, this.snippet)
            .then(() => {
              let res = this.snippet;
              this.snippet.snippetContent = null;

              $rootScope.$emit('New Snippet Created');
              return res;
            })
            .then(() => $location.url('/story#view'))
            .catch(err => $log.error(err.message));
        };
      };
    },
  ],
};
