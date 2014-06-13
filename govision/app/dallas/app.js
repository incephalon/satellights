var app = angular.module('dallasApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
		.when('/',
		{
		    templateUrl: 'agencies.html',
		    controller: "myC"
		})
		.when('/agencies', {
		    templateUrl: 'agencies.html',
		    controller: 'agencies'
		})
		.when('/mayor', {
		    templateUrl: 'mayor.html',
		    controller: 'mayor'
		})
		.when('/citycouncil', {
		    templateUrl: 'cityCouncil.html',
		    controller: 'cityCouncil'
		})
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('myC', function ($scope) {
    $scope.hello = "world";

});

app.controller('agencies', function ($scope) {




});
app.controller('cityCouncil', function ($scope) {




});
app.controller('mayor', function ($scope) {




});