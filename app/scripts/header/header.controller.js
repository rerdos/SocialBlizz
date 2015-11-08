(function() {
  'use strict';

  headerCtrl.$inject = ['headerService'];
  function headerCtrl(headerService) {
    var vm = this;

    vm.headerName = headerService.headerName;
    vm.headerElements = headerService.menuElements();
  }

  angular.module('app.header')
    .controller('headerCtrl', headerCtrl);
})();