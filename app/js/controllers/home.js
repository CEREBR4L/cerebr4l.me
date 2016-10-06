'use strict';

angular.module('app').controller('home', function homeController($scope, getProjects) {

	$scope.title = "Cerebral";
	$scope.subTitle = "I like making things and putting them on the internet for others to see.";

	getProjects.getData().then((resp) => {
		$scope.projects = resp.data;
	});
	
});