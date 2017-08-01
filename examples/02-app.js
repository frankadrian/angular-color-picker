angular
    .module('app', ['color.picker'])
    .controller('AppCtrl', function($scope) {
        $scope.eventApi = {
            onChange: function() {
                console.log($scope.color);
            },
            onBlur: function() {
                console.log($scope.color);
            },
            onOpen: function() {
                console.log($scope.color);
            },
            onClose: function() {
                console.log($scope.color);
            },
        };

        var _color = 'hsl(0, 100%, 50%)';
        $scope.color = function(newColor) {
          return angular.isDefined(newColor) ? (_color = newColor) : _color;
        };
    });
