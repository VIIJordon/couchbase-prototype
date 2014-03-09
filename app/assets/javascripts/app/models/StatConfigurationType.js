angular.module('prototype.models').factory('StatConfigurationType', ['railsResourceFactory', function (railsResourceFactory) {
    return railsResourceFactory({url: '/api/stat_configuration_types', name: 'statConfigurationType'});
}]);