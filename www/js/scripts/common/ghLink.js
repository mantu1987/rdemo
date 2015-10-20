define(['angularAMD'], function(angularAMD) {
     angularAMD.directive('ghLink', function () {
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
});
  // Create function to link to GitHub
   