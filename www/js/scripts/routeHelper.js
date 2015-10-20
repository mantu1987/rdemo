define(['angularAMD','text!../../views/home.html','text!../../views/pictures.html','text!../../views/modules.html','text!../../views/map.html'], function(angularAMD,homeTemplate,pictureTemplate,moduleTemplate,mapTemplate) {
	return ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when("/home", angularAMD.route({
				template: homeTemplate,
				controller: 'HomeController',
				navTab: "home"
			}))
			.when("/pictures", angularAMD.route({
				template: pictureTemplate,
				controllerUrl: 'controller/pictures_ctrl',
				navTab: "pictures"
			}))
			.when("/modules", angularAMD.route({
				template: moduleTemplate,
				controller: 'ModulesController',
				navTab: "modules"
			}))
			.when("/map", angularAMD.route({
				template: mapTemplate,
				controller: 'MapController',
				navTab: "map"
			}))
			.otherwise({
				redirectTo: '/home'
			});
	}];
});
