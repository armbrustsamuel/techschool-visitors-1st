sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/m/MessageToast"
], function(Controller, formatter, MessageToast) {
	"use strict";

	return Controller.extend("techschool-visitors-1st.controller.Visitors", {
		oVisitorsModel : new sap.ui.model.json.JSONModel(),
	    sDestinationURL : "cf-python-visitors",
		formatter: formatter,
		
		onInit: function() {
		    var that = this;
		    
		    this.oVisitorsModel.setData({
		    	visitorList: []
		    });
		    
	        this.getView().setModel(this.oVisitorsModel, "Visitors");
	        
	        this.getView().addEventDelegate({
			        onBeforeShow: function () {
			            that.fnLoadTasksFromServer(that);
			        }
			});
		},
		
		onItemClose: function (oEvent) {
			var oItem = oEvent.getSource(),
				oList = oItem.getParent();

			oList.removeItem(oItem);

			MessageToast.show('Item Closed: ' + oEvent.getSource().getTitle());
		},
		
		onAcceptPress: function(e){
			MessageToast.show("You have accepted the visitor");
		},
		
		onRejectPress: function(e){
			MessageToast.show("You have rejected the visitor");
		},
		
		fnLoadTasksFromServer: function(that){
		    jQuery.ajax(this.sDestinationURL + "/api/visitors", {
		        dataType: "json",
		        method: "GET",
				contentType: "application/json; charset=UTF-8",
				success: that.fnSuccessCallback(that),
				error: that.fnErrorCallback
		    });
		},
		
		onAfterRendering: function() {
		    this.getView().setBusy(true);
	        this.fnLoadTasksFromServer(this);
		},
		
		fnSuccessCallback : function(controller){
		    return function(data){
		        var oModelData = controller.oVisitorsModel.getData();  
		        oModelData.visitorList = data;
		        controller.oVisitorsModel.setData(oModelData);
		        controller.getView().setBusy(false);
		    };
		},
		
		fnErrorCallback: function(){
		    console.log("Error!!!");
		}
		
	});
});