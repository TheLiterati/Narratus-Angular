'use strict';

// require('./_contribute.scss');

module.exports = {
  template: require('./contribute.html'),
  controllerAs: 'contributeCtrl',
  controller: [
    '$log',
    '$rootScope',
    '$location',
    'storyService',
    function($log, $rootScope, $location, storyService) {
      this.$onInit = () => {
        $log.debug('ContributeController');

        this.snippet = {};

        this.createSnippet = function() {
          return storyService.createSnippet(this.snippet)
            .then(() => {
              let res = this.snippet;
              this.snippet.snippetContent = null;

              $rootScope.$emit('New Snippet Created');
              return res;
            })
            .then(() => $location.url('/feed'))
            .catch(err => $log.error(err.message));
        };
      };
    },
  ],
};
