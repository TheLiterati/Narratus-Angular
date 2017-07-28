'use strict';

module.exports = [
  '$log',
  '$location',
  function($log, $location){
    this.$onInit = () => {
      $log.debug('#library controller');

      this.title = 'Narratus Library';

      let url = $location.url();
      this.view = url === '/story#view' || url === '/story';
      this.edit = url === '/story#edit' || url === '/story';
      this.create = url === '/story#create' || url === '/story';

      this.createToggle = () => {
        $log.debug('#createToggle');
        this.create = true;
        this.edit = false;
        this.view = false;
      };

      this.editToggle = () => {
        $log.debug('#editToggle');
        this.edit = true;
        this.create = false;
        this.view = false;
      };


      this.viewToggle = () => {
        $log.debug('#viewToggle');
        this.view = true;
        this.create = false;
        this.edit = false;
      };


      // this.showSignup = url = '/library' || url === '/join';
    };
  },
];
