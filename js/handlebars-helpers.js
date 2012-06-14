Handlebars.registerHelper("log", function(optionalValue) {
	console.log("Context:", this, "Value:", optionalValue);
});

Handlebars.registerHelper("dl", function(list) {
	console.log("DL:", this, "List:", list);
	var outputString = "";
	outputString += "<dl>";
	for(var i = 0, l = list.length; i < l; i++){
		var sublist = list[i];
		outputString += "<dt>"+sublist.label+"</dt>";
		for(var j=0, il=sublist.items.length; j < il; j++){
			var item = sublist.items[j];
			outputString += "<dd>";
			if(item.hasOwnProperty("link")){
				outputString += "<a href=\"" + item.link + "\">" + item.label + "</a>";
			}
			else{
				outputString += item;
			}
			outputString += "</dd>";
		}
	}
	outputString += "</dl>";

	return new Handlebars.SafeString(outputString);
});