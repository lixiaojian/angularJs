define("config", function () {
    require.config({
        baseUrl: 'javascripts',
        paths: {
            'jQuery': 'vendors/jquery/jquery-1.11.0',
            'angular': 'vendors/angularJs/angular',
            'angular-resource': 'vendors/angularJs/angular-resource',
            'angular-route':'vendors/angularJs/angular-route',
            'ace':'vendors/ace/ace',
            'ace-elements':'vendors/ace/ace-elements',
            'ace-extra':'vendors/ace/ace-extra',
            'bootstrap':'vendors/bootstrap/bootstrap'
        },
        shim: {
            'angular' : {'exports' : 'angular'},
            'angular-resource': { deps:['angular']},
            'angular-route': { deps: ['angular']},
            'jQuery': {'exports' : 'jQuery'},
            'bootstrap':{deps:['jQuery']},
            'ace':{deps:['jQuery','bootstrap','ace-extra']},
            'ace-elements':{deps:['ace']}
        }
    });
});
