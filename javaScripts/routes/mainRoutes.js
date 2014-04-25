define(['modules/mainApp', 'controllers/mainController','controllers/dashboardCtr',
        'controllers/typographyCtr','controllers/elementsCtr','controllers/buttonsIconsCtr',
        'controllers/treeViewCtr'], function (mainApp) {
    return mainApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/',{
            templateUrl: 'javaScripts/templates/list.html'
        }).when('/dashboard', {
            templateUrl: 'javaScripts/templates/dashboard.html',
            controller: 'dashboardCtr'
        }).when('/typography', {
            templateUrl: 'javaScripts/templates/typography.html',
            controller: 'typographyCtr'
        }).when('/elements', {
            templateUrl: 'javaScripts/templates/elements.html',
            controller: 'elementsCtr'
        }).when('/buttonsIcons', {
            templateUrl: 'javaScripts/templates/buttonsIcons.html',
            controller: 'buttonsIconsCtr'
        }).when('/treeView', {
            templateUrl: 'javaScripts/templates/treeView.html',
            controller: 'treeViewCtr'
        }).when('/jQueryUI', {
            templateUrl: 'javaScripts/templates/jQueryUI.html'
        }).when('/nestableLists', {
            templateUrl: 'javaScripts/templates/nestableLists.html'
        }).when('/tables', {
            templateUrl: 'javaScripts/templates/tables.html'
        }).when('/jqGrid', {
            templateUrl: 'javaScripts/templates/jqGrid.html'
        }).when('/formElements', {
            templateUrl: 'javaScripts/templates/formElements.html'
        }).when('/formWizard', {
            templateUrl: 'javaScripts/templates/formWizard.html'
        }).when('/wysiwyg', {
            templateUrl: 'javaScripts/templates/wysiwyg.html'
        }).when('/dropZone', {
            templateUrl: 'javaScripts/templates/dropZone.html'
        }).when('/widgets', {
            templateUrl: 'javaScripts/templates/widgets.html'
        }).when('/calendar', {
            templateUrl: 'javaScripts/templates/calendar.html'
        }).when('/gallery', {
            templateUrl: 'javaScripts/templates/gallery.html'
        }).when('/profile', {
            templateUrl: 'javaScripts/templates/profile.html'
        }).when('/inbox', {
            templateUrl: 'javaScripts/templates/inbox.html'
        }).when('/pricing', {
            templateUrl: 'javaScripts/templates/pricing.html'
        }).when('/invoice', {
            templateUrl: 'javaScripts/templates/invoice.html'
        }).when('/timeLine', {
            templateUrl: 'javaScripts/templates/timeLine.html'
        }).when('/faq', {
            templateUrl: 'javaScripts/templates/faq.html'
        }).when('/error404', {
            templateUrl: 'javaScripts/templates/error404.html'
        }).when('/error500', {
            templateUrl: 'javaScripts/templates/error500.html'
        }).when('/grid', {
            templateUrl: 'javaScripts/templates/grid.html'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
});