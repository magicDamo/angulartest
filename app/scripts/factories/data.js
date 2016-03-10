'use strict';
/**
 * @ngdoc function
 * @name angulartestApp.service:Data
 * @description
 * # MainCtrl
 * Data Provider, emulates backend or some other service.
 */
angular.module('angulartestApp')
.factory('Data',[function() {

    
    var list1=[
        {name:'a item1', id:0},
        {name:'item2', id:1},
        {name:'item3', id:2},
        {name:'item4', id:3},
        // {name:'item5', id:4},
        // {name:'item6', id:5},
        // {name:'item7', id:6},
        // {name:'item8', id:7},
    ];

    var list2=[
        {name:'b item2.1', id:0},
        {name:'item2.2', id:1},
        {name:'item2.3', id:2},
        {name:'item2.4', id:3},
        {name:'item2.5', id:4},
        // {name:'item2.6', id:5},
        // {name:'item2.7', id:6},
    ];
    

    

  return {
        getList:function(n){
            return (n===1?list1:list2);
        }
    };
}]);