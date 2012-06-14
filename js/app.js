(function(){




	$(function(){

		var projectTabPaneTemplate = Handlebars.compile($('#project-tab-pane-tmpl').html());
		var aboutPageTemplate = Handlebars.compile($('#about-page-tmpl').html());

		var projectsData = {};

		$.getJSON('json/projects.json', function(data){
			console.log("Got JSON", data);
			projectsData = data;

			$('#spiro').append(projectTabPaneTemplate(projectsData[0]));

			$('.carousel').carousel({
			  interval: 3000
			});
		});

		$.getJSON('json/about.json', function(data){
			$('#about-container').append(aboutPageTemplate(data));
		});

	})
})();