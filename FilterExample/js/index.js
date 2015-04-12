angular.module('myApp.controllers',[]).controller('indexCtrl',['$scope',function($scope){

     var listPhone=[
                {name:'Jose', phone:'123465789'},
                {name:'Angel', phone:'987654321'},
                {name:'Alejandro', phone:'159357825'},
                {name:'Pepe', phone:'414789963'},
                {name:'Juan', phone:'142365478'},
                {name:'Juliette', phone:'987654321'}
            ];
    $scope.agenda=listPhone;




}]);