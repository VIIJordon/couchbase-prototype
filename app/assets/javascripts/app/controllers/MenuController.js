angular.module('Prototype').controller('MenuController', ['$scope', '$location',  function($scope, $location) {
	$scope.items =[{
		'title': 'Stat Configurations', url: '/stat_configurations'
	}]
}]);
