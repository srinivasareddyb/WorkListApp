/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["uxtest/com/uxtest/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
