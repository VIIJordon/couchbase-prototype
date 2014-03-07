// Declare app level module which depends on filters, and services
angular.module('Prototype', ['ui.bootstrap', 'prototype.models', 'ngRoute', 'ngGrid']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stats_configurations', {templateUrl: '/stats_configurations', controller: 'StatsConfigurationController'});
    $routeProvider.when('/dashboard', {templateUrl: '/dashboards', controller: 'DashboardController'});

    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);
angular.module('prototype.models', ['rails']);
