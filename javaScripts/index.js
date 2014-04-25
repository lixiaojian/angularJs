require(['config'], function () {
    require(['jQuery', 'angular', 'routes/mainRoutes','ace-elements'], function ($, angular, mainRoutes) {
        $(function () { // using jQuery because it will run this even if DOM load already happened
            angular.bootstrap(document, ['mainApp']);
        });
    });
});
