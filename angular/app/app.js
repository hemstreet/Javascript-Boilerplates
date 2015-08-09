var app = angular.module('boilerPlate', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    }).when('/form', {
        templateUrl: 'views/form.html',
        controller: 'DemoController'
    })
}]);