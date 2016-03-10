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

	$scope.captureEnter = function(){
		console.log('captureEnter');
		if($scope.addlabel && this.selList!==null) {
			console.log('GO AHEAD');
			this.addItem();
		}
	
	};

	this.addItem = function() {

		var newItem = {
			name:$scope.addlabel,
			id:(this.selList.length)
		};

		this.selList.push(newItem);
		$scope.addlabel = '';
	};

	this.deleteItem = function (item, listid) {
		var list = listid==='list1'?this.list1:this.list2;
		console.log('BEFORE', list);
		for(var i=0;i<list.length;i++) {
			if(item.id===list[i].id) {
				list.splice(i,1);
				break;
			}
		}
	};

	this.selectList= function(n) {
		var self = this;

		$timeout(function() { 
			self.ddv = false;
		}, 50);

		
		if(n===1){
			this.selList = this.list1;
		} else {
			this.selList = this.list2;
		}
			
		console.log('selList', this.selList[0]);
	};

 }]);
