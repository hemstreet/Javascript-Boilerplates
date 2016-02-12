"use strict";

angular.module('boilerPlate').controller('MainController', ['$scope', 'socket', function($scope, socket) {

    var vm = this;

    vm.pageName = 'Home';

    console.log('main Controller');
}]);