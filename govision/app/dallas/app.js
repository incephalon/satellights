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
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('myC', function ($scope) {
    $scope.hello = "world";

});

app.controller('agencies', function ($scope) {


    $scope.departments = [
        {
            name: "Agriculture"
        },
        {
            name: "Defense"
        },
        {
            name: "State"
        },
        {
            name: "Education"
        },
        {
            name: "Homeland Security"
        },
        {
            name: "Treasury"
        },
        {
            name: "Interior"
        },
        {
            name: "Labor"
        },
        {
            name: "Health and Human Services"
        },
        {
            name: "Housing and Urban Development"
        },
        {
            name: "Transportation"
        },
        {
            name: "Energy"
        },
        {
            name: "Veterans Affairs"
        }
    ];




    $scope.agencies = [
        {
            name: 'navy',
            site: 'navy.mil'
        },
        {
            name: 'army',
            site: 'army.mil'
        },


    ];



});