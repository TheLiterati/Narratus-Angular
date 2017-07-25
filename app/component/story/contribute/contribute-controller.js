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

        
      };
    }
  ],
};
