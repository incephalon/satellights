var app = angular.module('myApp', []);

app.controller('myC', function ($scope) {
    $scope.hello = "world";


    //$scope.entities = [
    //     {
    //        name:"legislative",
    //        x: -800,
    //        y: 5000,
    //        z: -10,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/congress.png"
    //    },
    //     {
    //        name:"executive",
    //        x: 1000,
    //        y: 0,
    //        z: -20,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/whiteHouse.PNG"
    //    },
    //     {
    //        name:"judicial",
    //        x: 500,
    //        y: -500,
    //        z: 50,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/supremeSmall.png"
    //    }

    //];

    //$scope.entities = {


    //    "legislative": {
    //        x: -800,
    //        y: 0,
    //        z: -10,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/congress.png"
    //    },
    //    "executive": {
    //        x: 0,
    //        y: 0,
    //        z: -20,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/whiteHouse.PNG"
    //    },
    //    "judicial": {
    //        x: 500,
    //        y: -100,
    //        z: 50,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/supremeSmall.png"
    //    },
    //    "uscode": {
    //        x: 200,
    //        y: 500,
    //        z: -40,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/usCodeSmall.jpg"
    //    },

    //    "constitution": {
    //        x: -200,
    //        y: 500,
    //        z: 0,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/constitutionSmall.jpg"
    //    },

    //    "house": {
    //        x: -900,
    //        y: -300,
    //        z: 10,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/USHouseSmall.png"
    //    },

    //    "senate": {
    //        x: -600,
    //        y: -300,
    //        z: 20,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/senate.png"
    //    },

    //    "courts": {
    //        x: 700,
    //        y: -500,
    //        z: 300,
    //        width: 200,
    //        height: 200,
    //        "src": "images/federal/districtCourtsSmall.png"
    //    }

    //};


    $scope.texasAgencies = [];
    $scope.federalAgencies = [];
    $scope.dallasAgencies = [];
    $scope.dallasCountyAgencies = [];



});