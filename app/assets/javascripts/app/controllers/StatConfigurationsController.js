angular.module('Prototype').controller('StatConfigurationsController', ['$scope', '$location',  '$routeParams', 'StatConfiguration',  function($scope, $location, $routeParams, StatConfiguration) {
  $scope.selected;
  $scope.isSaving=false;
  $scope.alerts = [];
  $scope.results = [];

  if ($routeParams.id == 'new') {
    $scope.selected = new StatConfiguration({stats:[]});
  } else if ($routeParams.id == undefined) {
    StatConfiguration.query({'page':1,'per_page':20}).then(function(results) {
      $scope.results=results;
    });    
 
  } else {
    StatConfiguration.get($routeParams.id).then(function(result) {
      $scope.selected = result;
    }, function(result) {
      $scope.alerts.push({type:'error',msg:'Error retrieving the Stat Configuration for id:' + $routeParams.id});
    });
  }

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  
  $scope.returnToMenu = function() {
    $location.path('/dashboard');
  }
  $scope.list = function() {
    $location.path('/stat_configurations');
  }
  $scope.new = function() {
    $location.path('/stat_configurations/new');
  }
  $scope.edit = function(item) {
    $location.path('/stat_configurations/'+item.id);
  }
  $scope.newStat = function() {
    $scope.selected.stats.push({stat_type: '', name: ''})
  };
  $scope.deleteStat = function(stat) {
    $scope.selected.stats.splice($scope.selected.stats.indexOf(stat), 1);
  };
  $scope.update = function(item){
    $scope.alerts = [];
    $scope.isSaving = true;
    $scope.alerts = [];
    item.save().then(function(result) {
    	$scope.isSaving = false;
      $scope.alerts.push({type:'success', msg: 'Configuration Saved'});
    }, function(errors) {
    	$scope.isSaving = false;
      $scope.alerts.push({type:'error', msg: 'Error Saving Configuration'});
    });
  };
  $scope.delete = function(item){
    $scope.alerts = [];
    // TODO: implement
  };
  $scope.loadSelected = function(item) {
    $location.path('/stat_configurations/'+item.id);

  };
  $scope.statConfigurationsGrid = {
    data: 'results',
    enableCellSelection: false,
    columnDefs: [
      {field: 'name', displayName: 'Name'},
      {displayName: '', width:150, cellTemplate: '<button class="btn btn-info" ng-click="edit(row.entity)">Edit</button>&nbsp;<button class="btn btn-danger" ng-confirm-click ng-click="delete(row.entity)">Delete</button>'}
    ]
  };
  $scope.statsGrid = {
    data: 'selected.stats',
    enableCellSelection: false,
    enableCellSelection: true,
    enableRowSelection: false,
    enableCellEditOnFocus: true,    
    columnDefs: [
      {field: 'name', displayName: 'Name'},
      {field: 'statType', displayName: 'Type'},
      {displayName: '', enableCellEdit: false, width:85, cellTemplate: '<button class="btn btn-danger" ng-confirm-click ng-click="deleteStat(row.entity)">Remove</button>'}
    ]
  };

}]);