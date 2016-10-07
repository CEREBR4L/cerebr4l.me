angular.module('app')
	.directive('footer', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'templates/footer.html',
	    controller: 'FooterController'
	  }
})

