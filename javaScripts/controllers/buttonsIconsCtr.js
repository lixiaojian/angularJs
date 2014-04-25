define(['modules/mainApp'], function (mainApp) {
    mainApp .controller('buttonsIconsCtr', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.pageTitle = 'UI 组件';
    }]);
});