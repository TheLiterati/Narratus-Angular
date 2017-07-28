'use strict';

require('./_main-library.scss');

module.exports = {
  template: require('./main-library.html'),
  controllerAs: 'mainLibraryCtrl',
  controller: [
    '$log',
    '$window',
    '$rootScope',
    '$location',
    'storyService',
    function($log, $window, $rootScope, $location, storyService){
      this.$onInit = () => {
        $log.debug('main library ctrl');

        this.library = [];
        this.currentStory = {};
        this.loadLibrary = () => {
          return storyService.fetchStories()
          .then(stories => {
            this.library = stories;
            console.log('these is stories', stories);
            console.log('dis is library', this.library);
            return this.library;
          });
        };

        this.fetchStory = storyId => {
          return storyService.fetchStory(storyId)
          .then(() => {
            $window.localStorage.removeItem('currentStory');
            $window.localStorage.setItem('currentStory', JSON.stringify(storyService.currentStory));
            console.log('story saved to local storage', storyService.currentStory);
          })
          .then(
            () => $location.url('/story#view')
          );
        };

        $rootScope.$on('locationChangeSuccess', this.loadLibrary);
        this.loadLibrary();
      };
    },
  ],
};
