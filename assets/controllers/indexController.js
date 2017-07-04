/**
 * Controller for index.php
 */


app.controller('indexController',['$scope','myFactory','myService',function($scope,myFactory,myService){
	
	myFactory.setName('Arun');
	$scope.myName = myFactory.getName();
	
	myService.setName('Developer');
	$scope.myDesg = myService.getName();
	
	//alert('Its in index controller');
	console.log($scope.myName+":"+$scope.myDesg);
	console.log(myFactory);
	console.log(myService);
}]);