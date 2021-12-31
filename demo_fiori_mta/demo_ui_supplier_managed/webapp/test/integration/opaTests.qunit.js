/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"supplier/demo/com/demouisuppliermanaged/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});