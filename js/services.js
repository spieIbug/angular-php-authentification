/**
 * Created by yacmed on 25/06/2015.
 */
'use strict'
app.factory('sessionService', function($http){
    var API_URI = 'api/';
    return {
        set:function(key, value){
            return sessionStorage.setItem(key, value);
        },
        get:function(key){
            return sessionStorage.getItem(key);
        },
        destroy:function(){
            for (var key in sessionStorage){
                sessionStorage.removeItem(key, sessionStorage.getItem[key]);
            }
        }
    };
});

app.factory('loginService', function($http, $location, sessionService){
   return{
       login:function(data, $scope){
           var $promise = $http.post('API/',data);
           $promise.then(function(msg){
                var userId = msg.data;
               if (userId!="fail"){
                   sessionService.set('user', userId);
                   $location.path('/home');
               } else {
                   $scope.msgTxt = 'incorrect informations';
                   $location.path('/login');
               }
           });
       },
       logout: function(){
           sessionService.destroy('user');
           $location.path('/login');
       }
   }
});
