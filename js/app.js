'use strict';

angular.module('raw', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'raw.filters',
  'raw.services',
  'raw.directives',
  'raw.controllers',
  'mgcrea.ngStrap',
  'ui',
  'colorpicker.module',
  'ngFileUpload'
])

.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix(''); 
  $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'RawCtrl'});
  $routeProvider.when("/dashboard", {templateUrl: 'partials/main.html'});
  $routeProvider.when('/login', {templateUrl: 'partials/main.html', controller: 'RawCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);
