(function() {
  'use strict';

  function appHeader() {
    return {
      restrict: 'E',
      controller: 'headerCtrl',
      controllerAs: 'header',
      replace: true,
      templateUrl: 'templates/header.html'
    };
  }

  angular.module('app.header')
    .directive('appHeader', appHeader);
})();