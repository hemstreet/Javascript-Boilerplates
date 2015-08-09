angular.module('boilerPlate').controller('DemoController', ['$scope', 'demoService', function($scope, demoService) {

    $scope.greeting = 'Hello World From the Controller!';

    demoService.test();
}]);