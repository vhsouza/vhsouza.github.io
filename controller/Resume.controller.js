sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("resume.resume.controller.Resume", {
		onInit: function () {
			this._initModel("model/mainProjects.json", "projects");
			this._initModel("model/professionalExperience.json", "experience");
			this._initModel("model/strengths.json", "strength");
			this._initModel("model/knowledges.json", "knowledge");
		},

		onAfterRendering: function () {
			var oVizFrame = this.getView().byId("knowledgeVizFrame");
			oVizFrame.setVizProperties({
				title: {
					visible: false
				}
			});
		},

		OnMailPress: function (oEvent) {
			sap.m.URLHelper.triggerEmail("victor_hugo_souza@yahoo.com.br");
		},

		OnLinkedinPress: function () {
			sap.m.URLHelper.redirect("https://www.linkedin.com/in/victor-hugo-6b183923/", true);
		},

		_initModel: function (sPath, sModelName) {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData(sPath);
			this.getView().setModel(oModel, sModelName);
		}

	});
});