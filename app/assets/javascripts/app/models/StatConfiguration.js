angular.module('prototype.models').factory('StatConfiguration', ['railsResourceFactory', function (railsResourceFactory) {
    return railsResourceFactory({url: '/api/stat_configurations', name: 'statConfiguration'});
}]);