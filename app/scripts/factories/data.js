'use strict';
/**
 * @ngdoc function
 * @name angulartestApp.service:Data
 * @description
 * # MainCtrl
 * Data Provider, emulates backend or some other service.
 */
angular.module('angulartestApp')
.factory('Data',['localStorageService', function(localStorageService) {

    var exists1 = localStorageService.get('list1') !== null;
    var exists2 = localStorageService.get('list2') !== null;
    var list1, list2;

    if(!exists1) {
        list1=[
            {name:'Apple', id:0},
            {name:'Ardvark', id:1},
            {name:'Cat', id:2},
            {name:'Zebra', id:3},
        ];

        /*var s1 = angular.toJson(list1, true);
        console.log('s1', s1);
        localStorageService.set('list1', s1);*/
        localStorageService.set('list1', list1);
    } else {
        list1 = localStorageService.get('list1');
    }
    
    if(!exists2) {
        list2=[
            {name:'Lemon', id:0},
            {name:'Pepper', id:1},
            {name:'Aardvark', id:2},
            {name:'Hippo', id:3},
            {name:'Sour Cream', id:4}
        ];

        localStorageService.set('list2', list2);

    } else {
        list2 = localStorageService.get('list2'); 
    }


    

        

  return {
        getList:function(n){
            return (n===1?list1:list2);
        },
        updateList:function(key, list){
            console.log('UPDATE LIST ', key,list);
            localStorageService.set(key, list);
        }
    };
}]);