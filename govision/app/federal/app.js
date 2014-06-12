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
{ name: " THE CONGRESS", title: 2 },
{ name: " THE PRESIDENT", title: 3 },
{ name: " FLAG AND SEAL, SEAT OF GOVERNMENT, AND THE STATES", title: 4 },
{ name: " GOVERNMENT ORGANIZATION AND EMPLOYEES", title:5 },
{ name: " APPENDIX", title:1 },
{ name: " DOMESTIC SECURITY", title: 6 },
{ name: " AGRICULTURE", title: 1 },
{ name: " ALIENS AND NATIONALITY", title: 7 },
{ name: " ARBITRATION", title: 8 },
{ name: " ARMED FORCES", title: 9 },
{ name: " BANKRUPTCY", title: 10 },
{ name: " BANKS AND BANKING", title: 11 },
{ name: " CENSUS", title: 12 },
{ name: " COAST GUARD", title: 13 },
{ name: " COMMERCE AND TRADE", title: 14 },
{ name: " CONSERVATION", title: 15 },
{ name: " COPYRIGHTS", title: 16 },
{ name: " CRIMES AND CRIMINAL PROCEDURE", title: 17 },
{ name: " APPENDIX", title: 18 },
{ name: " CUSTOMS DUTIES", title: 19 },
{ name: " EDUCATION", title: 20 },
{ name: " FOOD AND DRUGS", title: 21 },
{ name: " FOREIGN RELATIONS AND INTERCOURSE", title: 22 },
{ name: " HIGHWAYS", title: 23 },
{ name: " HOSPITALS AND ASYLUMS", title: 24 },
{ name: " INDIANS", title: 25 },
{ name: " INTERNAL REVENUE CODE", title: 26 },
{ name: " INTOXICATING LIQUORS", title: 27 },
{ name: " JUDICIARY AND JUDICIAL PROCEDURE", title: 27 },
{ name: " LABOR", title: 28 },
{ name: " MINERAL LANDS AND MINING", title: 29 },
{ name: " MONEY AND FINANCE", title: 30 },
{ name: " NATIONAL GUARD", title: 31 },
{ name: " NAVIGATION AND NAVIGABLE WATERS", title: 32 },
{ name: " PATENTS", title: 33 },
{ name: " PATRIOTIC AND NATIONAL OBSERVANCES, CEREMONIES, ANDORGANIZATIONS", title: 34 },
{ name: " PAY AND ALLOWANCES OF THE UNIFORMED SERVICES", title: 35 },
{ name: " VETERANS BENEFITS", title: 36 },
{ name: " POSTAL SERVICE", title: 1 },
{ name: " PUBLIC BUILDINGS, PROPERTY, AND WORKS", title: 37 },
{ name: " PUBLIC CONTRACTS", title: 38 },
{ name: " THE PUBLIC HEALTH AND WELFARE", title: 39 },
{ name: " PUBLIC LANDS", title: 40 },
{ name: " PUBLIC PRINTING AND DOCUMENTS", title: 41 },
{ name: " RAILROADS", title: 42 },
{ name: " SHIPPING", title: 43 },
{ name: " TELEGRAPHS, TELEPHONES, AND RADIOTELEGRAPHS", title: 45 },
{ name: " TERRITORIES AND INSULAR POSSESSIONS", title: 46 },
{ name: " TRANSPORTATION", title: 47 },
{ name: " WAR AND NATIONAL DEFENSE", title: 48 },
{ name: " NATIONAL AND COMMERCIAL SPACE PROGRAMS", title: 49 },




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
            name: "Agriculture", logourl: "../../images/federal/Agencies/75px-US-DeptOfAgriculture-Seal2.svg.png"
        },
        {
            name: "Defense", logourl: "../../images/federal/Agencies/75px-United_States_Department_of_Defense_Seal.svg.png"
        },
        {
            name: "State", logourl: "../../images/federal/Agencies/75px-Department_of_state.svg.png"
        },
        {
            name: "Education", logourl: "../../images/federal/Agencies/75px-US-DeptOfEducation-Seal.svg.png"
        },
        {
            name: "Homeland Security", logourl: "../../images/federal/Agencies/75px-US_Department_of_Homeland_Security_Seal.svg.png"
        },
        {
            name: "Treasury", logourl: "../../images/federal/Agencies/75px-US-DeptOfTheTreasury-Seal.svg.png"
        },
        {
            name: "Interior", logourl: "../../images/federal/Agencies/75px-US-DeptOfTheInterior-Seal.svg.png"
        },
        {
            name: "Labor", logourl: "../../images/federal/Agencies/75px-US-DeptOfLabor-Seal.svg.png"
        },
        {
            name: "Health and Human Services", logourl: "../../images/federal/Agencies/75px-US-DeptOfHHS-Seal.svg.png"
        },
        {
            name: "Housing and Urban Development", logourl: "../../images/federal/Agencies/70px-US-DeptOfHUD-Seal.svg.png"
        },
        {
            name: "Transportation", logourl: "../../images/federal/Agencies/73px-US-DeptOfTransportation-Seal.svg.png"
        },
        {
            name: "Energy", logourl: "../../images/federal/Agencies/US-DeptOfEnergy-Seal.svg.png"
        },
        {
            name: "Veterans Affairs", logourl: "../../images/federal/Agencies/75px-US-DeptOfVeteransAffairs-Seal.svg.png"
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