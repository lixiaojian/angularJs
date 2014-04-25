define(['modules/mainApp'], function (mainApp) {
    mainApp .controller('dashboardCtr', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.pageTitle = '仪盘表';
        $scope.templates = {
            'infoBox': 'javaScripts/templates/dashboard/infoBox.html',
            'widgetBox':'javaScripts/templates/dashboard/widgetBox.html'
        };
    }]);
});