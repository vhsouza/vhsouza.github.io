/*global QUnit*/

sap.ui.define([
	"resume/resume/controller/Resume.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Resume Controller");

	QUnit.test("I should test the Resume controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});