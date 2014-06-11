var app = angular.module('fedApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
		.when('/',
		{
		    templateUrl: 'uscode.html',
		    controller: "myC",
		    animation: 'slide'
		})
		.when('/agencies', {
		    templateUrl: 'agencies.html',
		    controller: 'agencies',
		    animation: 'slide'
		})
        .when('/constitution', {
            templateUrl: 'constitution.html',
            controller: 'constitution',
            animation: 'slide'
        })
        .when('/uscode', {
            templateUrl: 'uscode.html',
            controller: "uscode",
            animation: 'slide'
        })
        .when('/congress', {
            templateUrl: 'congress.html',
            controller: 'congress',
            animation: 'slide'
        })
        .when('/executive', {
            templateUrl: 'executive.html',
            controller: 'executive',
            animation: 'slide'
        })
        .when('/judicial', {
            templateUrl: 'judicial.html',
            controller: 'judicial',
            animation: 'slide'
        })
        .when('/senate', {
            templateUrl: 'senate.html',
            controller: 'senate',
            animation: 'slide'
        })
        .when('/house', {
            templateUrl: 'house.html',
            controller: 'house',
            animation: 'slide'
        })
        .when('/bills', {
            templateUrl: 'bills.html',
            controller: 'bills',
            animation: 'slide'
        })
        .when('/committees', {
            templateUrl: 'committees.html',
            controller: 'committees',
            animation: 'slide'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('myC', function ($scope) {
    $scope.hello = "world";

});

app.controller('constitution', function ($scope) {
    $scope.hello = "world";

});

app.controller('uscode', function ($scope) {
    $scope.titles = [
{ name: " GENERAL PROVISIONS", title:1 },
{ name: " THE CONGRESS", title: 1 },
{ name: " THE PRESIDENT", title: 1 },
{ name: " FLAG AND SEAL, SEAT OF GOVERNMENT, AND THE STATES", title: 1 },
{ name: " GOVERNMENT ORGANIZATION AND EMPLOYEES", title:1 },
{ name: " APPENDIX", title:1 },
{ name: " DOMESTIC SECURITY", title: 1 },
{ name: " AGRICULTURE", title: 1 },
{ name: " ALIENS AND NATIONALITY", title: 1 },
{ name: " ARBITRATION", title: 1 },
{ name: " ARMED FORCES", title: 1 },
{ name: " BANKRUPTCY", title: 11 },
{ name: " BANKS AND BANKING", title: 1 },
{ name: " CENSUS", title: 1 },
{ name: " COAST GUARD", title: 1 },
{ name: " COMMERCE AND TRADE", title: 1 },
{ name: " CONSERVATION", title: 1 },
{ name: " COPYRIGHTS", title: 1 },
{ name: " CRIMES AND CRIMINAL PROCEDURE", title: 1 },
{ name: " APPENDIX", title: 1 },
{ name: " CUSTOMS DUTIES", title: 1 },
{ name: " EDUCATION", title: 1 },
{ name: " FOOD AND DRUGS", title: 1 },
{ name: " FOREIGN RELATIONS AND INTERCOURSE", title: 1 },
{ name: " HIGHWAYS", title: 1 },
{ name: " HOSPITALS AND ASYLUMS", title: 1 },
{ name: " INDIANS", title: 1 },
{ name: " INTERNAL REVENUE CODE", title: 1 },
{ name: " INTOXICATING LIQUORS", title: 1 },
{ name: " JUDICIARY AND JUDICIAL PROCEDURE", title: 1 },
{ name: " LABOR", title: 1 },
{ name: " MINERAL LANDS AND MINING", title: 1 },
{ name: " MONEY AND FINANCE", title: 1 },
{ name: " NATIONAL GUARD", title: 1 },
{ name: " NAVIGATION AND NAVIGABLE WATERS", title: 1 },
{ name: " PATENTS", title: 1 },
{ name: " PATRIOTIC AND NATIONAL OBSERVANCES, CEREMONIES, ANDORGANIZATIONS", title: 1 },
{ name: " PAY AND ALLOWANCES OF THE UNIFORMED SERVICES", title: 1 },
{ name: " VETERANS BENEFITS", title: 1 },
{ name: " POSTAL SERVICE", title: 1 },
{ name: " PUBLIC BUILDINGS, PROPERTY, AND WORKS", title: 1 },
{ name: " PUBLIC CONTRACTS", title: 1 },
{ name: " THE PUBLIC HEALTH AND WELFARE", title: 1 },
{ name: " PUBLIC LANDS", title: 1 },
{ name: " PUBLIC PRINTING AND DOCUMENTS", title: 1 },
{ name: " RAILROADS", title: 1 },
{ name: " SHIPPING", title: 1 },
{ name: " TELEGRAPHS, TELEPHONES, AND RADIOTELEGRAPHS", title: 1 },
{ name: " TERRITORIES AND INSULAR POSSESSIONS", title: 1 },
{ name: " TRANSPORTATION", title: 1 },
{ name: " WAR AND NATIONAL DEFENSE", title: 1 },
{ name: " NATIONAL AND COMMERCIAL SPACE PROGRAMS", title: 1 },




    ];


});

app.controller('judicial', function ($scope) {
    $scope.hello = "world";

});

app.controller('congress', function ($scope) {

 

});

app.controller('house', function ($scope) {
    //http://en.wikipedia.org/wiki/List_of_United_States_congressional_districts
    //http://en.wikipedia.org/wiki/Current_members_of_the_United_States_House_of_Representatives
    //get from govtrack.us?


});


app.controller('senate', function ($scope) {



});


app.controller('bills', function ($scope) {
    $scope.categories = ['signed'];


});



app.controller('committees', function ($scope) {
    $scope.senateCommittees = [
 { name: "Agriculture, Nutrition, and Forestry " },
 { name: "Appropriations " },
 { name: "Armed Services " },
 { name: "Banking, Housing, and Urban Affairs " },
 { name: "Budget " },
 { name: "Commerce, Science, and Transportation " },
 { name: "Energy and Natural Resources " },
 { name: "Environment and Public Works " },
 { name: "Finance " },
 { name: "Foreign Relations " },
 { name: "Health, Education, Labor, and Pensions " },
 { name: "Homeland Security and Governmental Affairs " },
 { name: "Judiciary " },
 { name: "Rules and Administration " },
 { name: "Small Business and Entrepreneurship " },
 { name: "Veterans' Affairs " },

 { name: "Indian Affairs " },
 { name: "Select Committee on Ethics " },
 { name: "Select Committee on Intelligence " },
 { name: "Special Committee on Aging " }

    ];



    $scope.houseCommittees = [{ name: "Agriculture" },
{ name: "Appropriations" },
{ name: "Armed Services" },
{ name: "Budget" },
{ name: "Education and the Workforce" },
{ name: "Energy and Commerce" },
{ name: "Ethics" },
{ name: "Financial Services" },
{ name: "Foreign Affairs" },
{ name: "Homeland Security" },
{ name: "House Administration" },
{ name: "Judiciary" },
{ name: "Natural Resources" },
{ name: "Oversight and Government Reform" },
{ name: "Rules" },
{ name: "Science, Space, and Technology" },
{ name: "Small Business" },
{ name: "Transportation and Infrastructure" },
{ name: "Veterans’ Affairs" },
{ name: "Ways and Means" },
{ name: "Intelligence" }
    ];

    $scope.jointCommittees = [
        { name: "Joint Economic Committee" },
{ name: "Joint Committee on the Library" },
{ name: "Joint Committee on Printing" },
{ name: "Joint Committee on Taxation" }

    ];

});


app.controller('executive', function ($scope) {
    $scope.member = "Kay Bailey Hutchinson"

});

app.controller('agencies', function ($scope) {

    $scope.departments = [
        {
            name:"Agriculture"
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
            name:'navy',
            site:'navy.mil'
        },
        {
            name: 'army',
            site: 'army.mil'
        },


    ];



});