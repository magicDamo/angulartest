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

	$scope.ddv = false;
	$scope.addlabel = '';

	$scope.list1 = Data.getList(1);
	$scope.list2 = Data.getList(2);

	$scope.selList=null;


	//CATCH ALL, OPERATES LIKE ESCAPE KEY FOR OPEN / ACTIVE ELEMENTS.
	$scope.md = function($event) {
		if($event.target.id==='chooser'|| $event.target.id==='caret') {
			return;
		}
		$scope.ddv = false;
	};

	//TOGGLE THE DROPDOWN.
	$scope.toggle = function() {
		$scope.ddv=!$scope.ddv;
	};


	$scope.addItem = function() {

		var newItem = {
			name:$scope.addlabel,
			id:($scope.selList.length)
		};

		$scope.selList.push(newItem);
		$scope.addlabel = '';

		var listid=$scope.selList===$scope.list1?'list1':'list2';
		Data.updateList(listid, $scope.selList);
	};

	$scope.keyCapture = function(){
		if($scope.addlabel && $scope.selList!==null) {
			$scope.addItem();
		}
	};

	$scope.deleteItem = function (item, listid) {
		var list = listid==='list1'?$scope.list1:$scope.list2;
		for(var i=0;i<list.length;i++) {
			if(item.id===list[i].id) {
				list.splice(i,1);
				break;
			}
		}
		Data.updateList(listid, list);
	};

	$scope.selectList= function(n) {
		$timeout(function() { 
			self.ddv = false;
		}, 50);
	
		if(n===1){
			$scope.selList = $scope.list1;
		} else {
			$scope.selList = $scope.list2;
		}
	};
 }]);
