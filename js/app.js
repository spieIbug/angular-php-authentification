/**
 * Created by yacmed on 25/06/2015.
 */
'use strict'
var app = angular.module('authentificationApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/login', {templateUrl : 'partials/login.html', controller : 'loginCtrl'});
    $routeProvider.when('/home', {templateUrl : 'partials/home.html', controller : 'homeCtrl'});
    $routeProvider.otherwise({redirectTo: '/login'});
});
