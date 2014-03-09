angular.module('Prototype').controller('DashboardController', ['$scope', '$location',  function($scope, $location) {
	$scope.items =[{
		'title': 'Stat Configuration Types', url: '/stat_configuration_types',
		'title': 'Stat Configurations', url: '/stat_configurations'
	}];
	$scope.loadPage = function(url) {
		$location.path(url);
	};	
}]);
