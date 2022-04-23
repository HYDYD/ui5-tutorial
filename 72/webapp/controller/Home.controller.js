sap.ui.define([
	"sap/ui5/walkthrough/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.ui5.walkthrough.controller.Home", {
		onDisplayNotFound : function () {
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},

		onNavToEmployees : function () {
			this.getRouter().navTo("employeeList");
		}
	});
});