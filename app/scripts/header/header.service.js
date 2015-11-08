(function() {
  'use strict';

  function headerService() {
    return {
      "headerName": "SocialBlizz",
      "menuElements": menuElements
    };

    function menuElements() {
      return [
        {
          "name": "Home",
          "url": "#"
        },
        {
          "name": "Test",
          "url": "#"
        },
        {
          "name": "Test 2",
          "url": "#"
        }
      ]
    }
  }

  angular.module('app.header')
    .factory('headerService', headerService);
})();