define(['modules/mainApp'], function (mainApp) {
    mainApp .controller('typographyCtr', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.pageTitle = '文字排版';
    }]);
});