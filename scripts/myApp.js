var app = angular.module("myApp", ["ngRoute"]);

var indexController = app.controller("indexController", function ($scope, $window) {

    $scope.message = "";

    $scope.popupGreet = function () {
        $window.alert("Hi there " + $scope.message);
    };
});



var techController = app.controller("techController", function ($scope) {
    $scope.techs = ["Java", "Go", "Node.JS", "JavaScript", "HTML", "Ruby on Rails"];
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/techs', {
        templateUrl: "/views/techs.html",
        controller: "techController"
    }).otherwise({
        templateUrl: "/views/main.html",
        controller: "indexController"
    })
}]);
