var app = angular.module('promesasApp.controllers',[]); 

app.controller('serviceCtrl',['$scope','yaydoo', function($scope, yaydoo){

	$scope.servicios = yaydoo;
 

	console.log($scope.servicios); 
}]);

 app.filter('format', function () {
        return function (item) {
           var t = item.split(/[- :]/);
           var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
           var time=d.getTime();                 
                   return time;
        };
    });


