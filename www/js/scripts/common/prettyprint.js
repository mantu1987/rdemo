define(['angularAMD'], function(angularAMD) {
	angularAMD.directive('prettyprint', function() {
		return {
			restrict: 'C',
			link: function postLink(scope, element, attrs) {
				element.html(prettyPrint(scope.dom));
			}
		};
	});
});