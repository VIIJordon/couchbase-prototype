angular.module('Prototype').controller('DashboardController', ['$scope', '$location',  function($scope, $location) {
	$scope.items =[{
		'title': 'Stat Configurations', url: '/stat_configurations'
	}]
}]);
