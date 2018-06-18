sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/m/MessageToast"
], function(Controller, formatter, MessageToast) {
	"use strict";

	return Controller.extend("com.sapvisitors-techschool-1st.controller.Visitors", {
		
		formatter: formatter,
		
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
		}
		
	});
});