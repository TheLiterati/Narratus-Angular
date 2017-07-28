'use strict';

// require('./_dashboard.scss');

module.exports = [
  '$log',
  '$window',
  '$location',
  '$rootScope',
  'storyService',
  function($log, $window, $location, $rootScope, storyService) {
    this.$onInit = () => {
      $log.debug('Dashboard Controller');
      this.title = 'Welcome to your Dashboard';
      this.followed = false;
      this.owned = false;

      if(this.followedStories !== [] || this.followedStories !== undefined) this.followed = true;
      if(this.ownedStories !== [] || this.ownedStories !== undefined) this.owned = true;

      this.ownedStories = JSON.parse($window.localStorage.ownedStories);
      this.followedStories = JSON.parse($window.localStorage.followedStories);

      //this was to toggle between two different "views" in the dashboard, but ew didn't end up needing them
      //in the future we'll want to set up a way to edit a user's password, email, etc. this could be a base
      //for that.
      // let url = $location.url();
      // this.dashboard = url === '/dashboard';
      // this.snippetApproval = url === '/dashboard#approve';
      //
      // this.approvalToggle = () => {
      //   this.dashboard = true;
      //   this.snippetApproval = false;
      // };
      //
      // this.dashboardToggle = () => {
      //   this.dashboard = false;
      //   this.snippetApproval = true;
      // };

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

      this.editStory = storyId => {
        return storyService.editStory(storyId)
        .then(() => {
          $window.localStorage.removeItem('currentStory');
          $window.localStorage.setItem('currentStory', JSON.stringify(storyService.currentStory));
          console.log('moving to the story edit page');
        })
        .then(
          () => $location.url('/story#edit')
        );
      };
      // console.log('yayyyyy', this.ownedStories, this.followedStories);

    };
  },
];
