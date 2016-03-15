'use strict';

(function() { //always use immediate functions
	//everything gets done in separate modules. Normally not much code in main module

	angular.module('demoApp', ['demoApp.config', 'demoApp.core']) //add as a dependency, module from app.config.js . Dependencies run first.
		.config(function(appVersion) { //config: at startup. Config always happens first
			console.log('config demoApp ' + appVersion);
		})
		.run(function() {
			console.log('run demoApp');
		});




})();
