sap.ui.define([
	"sap/m/Text"
], function (Text) {
	"use strict";

	return {
		dateFormatter: function (sValue) {
			if (!sValue) {
				return "";
			}
			
			// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
			var a = new Date(sValue);
			var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			var year = a.getFullYear();
			var month = months[a.getMonth()];
			var date = a.getDate();
			var hour = a.getHours();
			var min = a.getMinutes();
			var sec = a.getSeconds();
			var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
			return time;
		}
	};
		
});
	