// dataServices
define(['app'], function (app) {
    app.factory('Pictures', function ($http, $q, $log) {
        var feed_url = "http://ycpi.api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK&tags=";
        return {
            query: function (tag_name) {
                var d = $q.defer();
                if (typeof tag_name === "undefined" || tag_name === "") {
                    $log.error("Pictures.query: missing tag_name.");
                    d.reject("tag must be provided");
                } else {
                    $http.jsonp(feed_url + tag_name).success(function (data) {
                        d.resolve(data.items);
                    }).error(function (data, status, headers, config) {
                        $log.error("Error: ", headers);
                        d.reject(data);
                    });
                }

                return d.promise;
            }
        };
    });

});
