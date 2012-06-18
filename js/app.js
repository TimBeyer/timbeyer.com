(function(){


	var domReady = $.Deferred();
	var dataLoaded = $.Deferred();

	var data = {};

	// Resolve domReady Deferred on domReady
	$(domReady.resolve);

	// Load json files
	$.when( $.getJSON('json/projects.json'), $.getJSON('json/about.json')).done(function(projects, about){

		data.projects = projects[0];
		data.about = about[0];

		dataLoaded.resolve();
	});

	// When the dom is ready and the data is loaded,
	// initialize the application
	$.when(domReady, dataLoaded).then(function(){

		/* 
			First prepare all views and add them to the dom
			Then upon completion, fade in the sections one by one
		*/

		/*
			Render navigation
		*/
		var subnav = new tbapp.views.NavbarView();
		var $subnavEl = $(subnav.render().el);
		$subnavEl.hide();
		$('.main-content').append($subnavEl);

		/* 
			Render about View
		*/
		var aboutSection = new tbapp.views.SectionView({
			id: "about",
			shortTitle: "About",
			contentData: {
				title: "About me",
				jsonLink: "json/about.json"
			}
		});

		var aboutView = new tbapp.views.SectionContentView({
			template: Handlebars.compile($('#about-page-tmpl').html())
		});

		aboutView.setContentData(data.about);

		var $aboutSectionEl = $(aboutSection.render().el);
		$aboutSectionEl.hide();

		$('.main-content').append($aboutSectionEl);
		aboutSection.setContentView(aboutView);

		// Add section to navigation
		subnav.addSection(aboutSection);

		/* 
			Render project views
		*/

		var projectSection = new tbapp.views.SectionView({
			id: "projects",
			shortTitle: "Projects",
			contentData: {
				title: "Projects and Code",
				jsonLink: "json/projects.json"
			}
		});

		var $projectSectionEl = $(projectSection.render().el);
		$projectSectionEl.hide();
		$('.main-content').append($projectSectionEl);

		// Add section to navigation
		subnav.addSection(projectSection);


		var projectsView = new tbapp.views.ProjectsView({
			projects: data.projects
		});

		projectSection.setContentView(projectsView);


		/*
			Fade in all the elements
		*/

		// When the spinner disappears too fast, it looks bad
		// Add an artificial wait time so it looks better
		var additionalWait = 500;
		_.delay(function(){
			var fadeInDebounce = 0;
			$('#main-spinner').fadeOut('fast', _.debounce(function(){
				$subnavEl.fadeIn(function(){
					subnav.startScrollHandling();
					$aboutSectionEl.slideDown('slow',function(){
						$projectSectionEl.slideDown('slow');
						
					});	
				});
			},fadeInDebounce));
		}, additionalWait);


	})



	$(function(){


	})
})();