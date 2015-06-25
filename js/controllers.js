/**
 * Created by yacmed on 25/06/2015.
 */
'use strict'
app.controller('loginCtrl', function($scope, loginService){
    $scope.login = function(user){
        loginService.login(user);
    }
});
app.controller('homeCtrl', function($scope){
    $scope.txt="Welcome";
});
