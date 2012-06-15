Handlebars.registerHelper("log", function(optionalValue) {
	console.log("Context:", this, "Value:", optionalValue);
});

Handlebars.registerHelper("dl", function(list) {
	//console.log("DL:", this, "List:", list);
	var outputString = "";
	outputString += "<dl>";
	for(var i = 0, l = list.length; i < l; i++){
		var sublist = list[i];
		outputString += "<dt>"+sublist.label+"</dt>";
		for(var j=0, il=sublist.items.length; j < il; j++){
			var item = sublist.items[j];
			outputString += "<dd>";
			if(item.hasOwnProperty("link")){
				outputString += "<a href='" + item.link + "' target='_blank'>" + item.label + "</a>";
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


Handlebars.registerHelper("p", function(paragraphs) {
	//console.log("P:", this, "Paragraphs:", paragraphs);
	var outputString = "";
	if(Object.prototype.toString.call(paragraphs) === '[object Array]'){
		for(var i = 0, l = paragraphs.length; i < l; i++){
			var p = paragraphs[i];
			outputString += "<p>"+p+"</p>";
		}	
	}
	else{
		outputString += "<p>" + paragraphs + "</p>";
	}

	return new Handlebars.SafeString(outputString);
});

Handlebars.registerHelper("carouselItem", function(item, isActive) {
	//console.log("CarouselItem:", this, "Item:", item, "isActive", isActive);
	var outputString = "";
	outputString += ("<div class='item " + (isActive ? "active" : "") + " '>");
	outputString += "<img src='"+ item.image +"'></img>";
	if(item.caption){

		outputString += "<div class='carousel-caption'>";
		outputString += "<h4>"+ item.caption.heading +"</h4>";
		outputString += "<p>"+ item.caption.content +"</p>";
		outputString += "</div>";
	}
	outputString += "</div>"
	return new Handlebars.SafeString(outputString);
});

Handlebars.registerHelper("carouselItems", function(items) {
	//console.log("Carouselitems:", this, "Items:", items);
	var outputString = "";
	for(var i = 0, il = items.length; i < il; i++){
		if(i === 0){
			outputString += Handlebars.helpers['carouselItem'].call(this, items[i], true);
		}
		else{
			outputString += Handlebars.helpers['carouselItem'].call(this, items[i], false);

		}
	}
	//console.log(outputString);
	return new Handlebars.SafeString(outputString);
});

Handlebars.registerHelper("carouselActionButtons", function(buttons) {
	//console.log("ActionButtons:", this, "buttons:", buttons, "isActive", isActive);
	var outputString = "";

	outputString += "<div class='btn-group carousel-action-buttons'>";
	for(var i = 0, bl = buttons.length; i < bl; i++){
		var button = buttons[i];
		outputString += "<a class='btn btn-large " + button.class + "' href='"+button.link+"'><i class='"+button.icon+"'></i> " + button.label + "</a>";
	}
	outputString += "</div>"
	return new Handlebars.SafeString(outputString);
});

Handlebars.registerHelper("carousel", function(carousel, id) {
	//console.log("Carousel:", this, "carousel:", carousel, "id", id);
	var outputString = "";

	outputString += "<div id='"+id+"' class='carousel project-carousel slide'>";

	//Inner part
	outputString += "<div class='carousel-inner'>";

	//Action buttons
	if(carousel.actionButtons){
		outputString += Handlebars.helpers['carouselActionButtons'].call(this, carousel.actionButtons);
	}

	// Items
	outputString += Handlebars.helpers['carouselItems'].call(this, carousel.items);
	outputString += "</div>";

	// Control Arrows
	outputString += "<a class='carousel-control left' href='#"+id+"' data-slide='prev'>&lsaquo;</a>";
	outputString += "<a class='carousel-control right' href='#"+id+"' data-slide='prev'>&rsaquo;</a>";

	outputString += "</div>"
	return new Handlebars.SafeString(outputString);
});

Handlebars.registerHelper("row", function(options){
	return "<div class='row'>" + options.fn(this) + "</div>";
});

Handlebars.registerHelper("span", function(size, options){
	return "<div class='span"+size+"'>" + options.fn(this) + "</div>";
});