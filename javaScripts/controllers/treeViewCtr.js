define(['modules/mainApp'], function (mainApp) {
    mainApp .controller('treeViewCtr', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.pageTitle = 'UI 组件';
    }]);
});