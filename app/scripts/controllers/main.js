'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
.controller('MainCtrl',['$scope', 'Data', function ($scope, Data) {

	this.list1 = Data.getList(1);
	console.log('list1', this.list1);

	this.list2 = Data.getList(2);
	console.log('list2', this.list2);

 }]);
