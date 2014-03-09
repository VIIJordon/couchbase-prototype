angular.module('Prototype').controller('StatConfigurationTypesController', ['$scope', '$location',  '$routeParams', 'StatConfigurationType',  function($scope, $location, $routeParams, StatConfiguration) {
  $scope.selected;
  $scope.isSaving=false;
  $scope.alerts = [];
  $scope.results = [];
  if ($routeParams.id == 'new') {
    $scope.selected = new StatConfiguration();
  } else if ($routeParams.id == undefined) {
    StatConfiguration.query().then(function(results) {
      $scope.results=results;
    });    
 
  } else {
    StatConfiguration.get($routeParams.id).then(function(result) {
      $scope.selected = result;

    }, function(result) {
      $scope.alerts.push({type:'error',msg:'Error retrieving the Stat Configuration Type for id:' + $routeParams.id});
    });
  }

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  
  $scope.returnToMenu = function() {
    $location.path('/dashboard');
  }
  $scope.list = function() {
    $location.path('/stat_configuration_types');
  }
  $scope.new = function() {
    $location.path('/stat_configuration_types/new');
  }

  $scope.update = function(item){
    $scope.alerts = [];
    $scope.isSaving = true;
    $scope.alerts = [];
    item.save().then(function(result) {
    	$scope.isSaving = false;
    }, function(errors) {
    	$scope.isSaving = false;
    });
  };
  $scope.delete = function(item){
    $scope.alerts = [];

  };
  $scope.loadSelected = function(item) {
    $location.path('/stat_configuration_types/'+item.id);

  };
  $scope.statConfigurationTypesGrid = {
    data: 'results',
    enableCellSelection: false,
    rowHeight: 35,
    columnDefs: [
      {field: 'name', displayName: 'Name'},
      {displayName: '', width:150, cellTemplate: '<button class="btn btn-info" ng-click="edit(row.entity)">Edit</button>&nbsp;<button class="btn btn-danger" ng-confirm-click ng-click="delete(row.entity)">Delete</button>'}
    ]
  };

}]);