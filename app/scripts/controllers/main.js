'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angulartestApp
 */
angular.module('angulartestApp')
.controller('MainCtrl',['$scope', '$timeout', 'Data', function ($scope, $timeout,  Data) {

	this.ddv = false;
	$scope.addlabel = '';

	this.list1 = Data.getList(1);
	this.list2 = Data.getList(2);

	this.selList=null;


	//CATCH ALL, OPERATES LIKE ESCAPE KEY FOR OPEN / ACTIVE ELEMENTS.
	this.md = function($event) {
		if($event.target.id==='chooser'|| $event.target.id==='caret') {
			return;
		}
		this.ddv = false;
	};

	//TOGGLE THE DROPDOWN.
	this.toggle = function() {
		this.ddv=!this.ddv;
	};

	this.addItem = function() {

		var newItem = {
			name:$scope.addlabel,
			id:(this.selList.length)
		};

		this.selList.push(newItem);
		console.log('add item', this.selList);
		$scope.addlabel = '';
	};

	this.selectList= function(n) {
		console.log('selectList', n);
		var self = this;

		$timeout(function() { 
			self.ddv = false;
		}, 50);

		if(!this.selList) {
			this.selList = this.list1;
			return;
		}
		if(n===2){
			console.log('two block');
			this.selList = this.list2;
		} else {
			console.log('one block');
			this.selList = this.list1;
		}
		// this.selList = n===2?this.list1:this.list2;	
		console.log('selList', this.selList[0]);
	};

 }]);
