define(['angularAMD','routeHelper', 'angular-route','common'], function (angularAMD,routeHelper) {
    var app = angular.module("ngreq-app", ['ngRoute']);
    
    /**
     * Configure Angular ngApp with route and cache the needed providers
     */
    app.config(routeHelper);
    app.run(function(){
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-44735340-1']);

        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    }); 
    // Define constant to be used by Google Analytics
    app.constant("SiteName", "/angularAMD");
    
    
    /*// Create function to link to GitHub
    app.directive('ghLink', function () {
        return {
            restrict: 'A',
            scope: true,
            template: '<a href="{{fullpath}}" target="_blank">{{filename}}</a>',
            controller: function ($scope, $attrs) {
                var gh_root = "https://github.com/marcoslin/angularAMD/blob/master/www/",
                    relfile = $attrs.ghLink,
                    fullpath = gh_root + relfile;
                $scope.fullpath = fullpath;
                $scope.filename = relfile.replace(/^.*[\\\/]/, '');
            }
        };
    });
    
    // Add support for pretty print
    app.directive('prettyprint', function() {
        return {
            restrict: 'C',
            link: function postLink(scope, element, attrs) {
                  element.html(prettyPrint(scope.dom));
            }
        };
    });*/
        
    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);

});
