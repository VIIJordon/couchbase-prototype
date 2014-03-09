angular.module('Prototype', ['ui.bootstrap', 'prototype.models', 'ngRoute', 'ngGrid']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stat_configuration_types', {templateUrl: '/stat_configuration_types', controller: 'StatConfigurationTypesController'});
    $routeProvider.when('/stat_configuration_types/:id', {templateUrl: '/stat_configuration_types/show', controller: 'StatConfigurationTypesController'});
    $routeProvider.when('/stat_configurations', {templateUrl: '/stat_configurations', controller: 'StatConfigurationsController'});
    $routeProvider.when('/stat_configurations/:id', {templateUrl: '/stat_configurations/show', controller: 'StatConfigurationsController'});
    $routeProvider.when('/dashboard', {templateUrl: '/dashboards', controller: 'DashboardController'});

    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);
angular.module('prototype.models', ['rails']);
