angular.module('myApp.controllers', []).
controller('registerController', [ '$scope' , function($scope, dentroDirectoAPIservice){
    
    
    $scope.submit = function(user){
       
        $scope.registro = "Bienvenido, " + user.name + ". Se ha registrado con el email " + user.email 
    
    }
    
}]);