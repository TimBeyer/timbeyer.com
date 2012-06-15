(function(){

	var data = {};

	var domReady = $.Deferred();
	var dataLoaded = $.Deferred();

	$(domReady.resolve);

	console.log("Fetching data");
	$.when( $.getJSON('json/projects.json'), $.getJSON('json/about.json')).done(function(projects, about){

		console.log("Data loaded");
		data.projects = projects[0];
		data.about = about[0];

		dataLoaded.resolve();
	});

	$.when(domReady, dataLoaded).then(function(){
		console.log("App starting");
		var projectTabPaneTemplate = Handlebars.compile($('#project-tab-pane-tmpl').html());
		var aboutPageTemplate = Handlebars.compile($('#about-page-tmpl').html());

		var projectTabPane = $(projectTabPaneTemplate(data.projects[0]) + projectTabPaneTemplate(data.projects[1]));
		var aboutPage = $(aboutPageTemplate(data.about));
		
		projectTabPane.hide();
		aboutPage.hide();



		$('#about-container').empty();
		$('#about-container').append(aboutPage);

		$('#spiro').append(projectTabPane);
		
		$.when(aboutPage.slideDown('slow')).done(function(){
			console.log('about is down');
			$.when(projectTabPane.slideDown('slow')).done(function(){

				$('[data-spy="scroll"]').each(function () {
				  var $spy = $(this).scrollspy('refresh');
				});

				$('.carousel').carousel({
				  interval: 3000
				});

			});
			
		})


	})



	$(function(){


	})
})();