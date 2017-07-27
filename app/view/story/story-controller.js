'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location) {
    this.$onInit = () => {
      $log.debug('CreateController');

      this.title = 'Welcome to Narratus';

      let url = $location.url();
      this.read = url === '/story#view';
      this.edit = url === '/story#edit';
      this.create = url === '/story#create';

      this.readStory = () => {
        this.read = true;
        this.edit = false;
        this.create = false;
        console.log('in read story');
      };

      this.createStory = () => {
        this.read = false;
        this.edit = false;
        this.create = true;
      };

      this.editStory = () => {
        this.read = false;
        this.edit = true;
        this.create = false;
      };
    };
  },
];
