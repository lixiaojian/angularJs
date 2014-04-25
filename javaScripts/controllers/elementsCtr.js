define(['modules/mainApp'], function (mainApp) {
    mainApp .controller('elementsCtr', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.pageTitle = 'UI 组件';
    }]);
});