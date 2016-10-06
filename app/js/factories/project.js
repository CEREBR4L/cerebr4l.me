angular.module('app').factory('getProjects', function ($http) {

	return {

		getData: function() {

			return $http.get('../json/projects.json').success((data) => {
				return data;
			});
		}

	};
});