'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location) {
    this.$onInit = () => {
      $log.debug('CreateController');

      this.title = 'Welcome to Narratus';

      let url = $location.url();
      this.read = url === '/story#view' || url === '/story';
      this.edit = url === '/story#edit' || url === '/story';
      this.create = url === '/story#create' || url === '/story';

      this.readStory = () => {
        console.log('in read story'); // WTF not hitting this?!
        this.read = true;
        this.edit = false;
        this.create = false;
        console.log('this.read', this.read);
        console.log('this.edit', this.edit);
        console.log('this.create', this.create);
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
