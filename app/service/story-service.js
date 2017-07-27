'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  '$window',
  'authService',
  function($q, $log, $http, $window, authService){
    $log.debug('storyService');

    let service = {};
    let url = `${__API_URL__}/api/story`;
    service.library = [];
    service.currentStory = {};

    service.createStory = story => {
      $log.debug('service.createStory');

      return authService.getToken()
        .then(token => {
          let config = {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };
          return $http.post(url, story, config);
        })
        .then(res => {
          $log.log('Successfully published new story');
          return res.data;
        })
        .catch(err => {
          $log.error(err.message);
          return $q.reject(err);
        });
    };

    service.fetchStories = () => {
      $log.debug('service.fetchStories');
      return $http.get(url)
      .then(res => {
        $log.log('Stories retrieved');
        service.library = res.data;
        return res.data;
      })
      .catch(err => {
        $log.error(err.message);
        $q.reject(err);
      });
    };

    service.fetchStory = storyId => {
      $log.debug('service.fetchStory');

      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application',
      };

      return $http.get(`${url}/${storyId}`, headers)
        .then(res => {
          $log.log('Story retrieved');
          service.currentStory = res.data;
          return res.data;
        })
        .catch(err => {
          $log.error(err.message);
          $q.reject(err);
        });
    };

    service.createSnippet = (storyId, snippet) => {
      $log.debug('service.createSnippet');

      return authService.getToken()
        .then(token => {
          let config = {
            headers: {
              Accept: 'appllication/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };
          let snippetURL = `${__API_URL__}/api/snippet/${storyId}`;
          return $http.post(snippetURL, snippet, config);
        })
        .then(res => {
          $log.log('Successfully contributed a  new snippet');
          return res.data;
        })
        .catch(err => {
          $log.error(err.message);
          return $q.reject(err);
        });
    };
    return service;
  },
];
