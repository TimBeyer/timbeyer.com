(function(){


	var domReady = $.Deferred();
	var dataLoaded = $.Deferred();

	var data = {};

	var app = {

		views: {
			SectionView: Backbone.View.extend({

				tagName: "section",

				initialize: function(init){
					// id is automatically filtered out and applied to the element

					this.template = Handlebars.compile($('#section-tmpl').html());
					this.contentData = init.contentData;
					this.shortTitle = init.shortTitle;

					this.newContentViewAttached = false;

					_.bindAll(this,"render");
				},

				render: function(){
					// If there is a contentView element, only detach it before emptying the element
					if(this.newContentViewAttached){
						//this.$('.section-content').slideUp('slow');
					}
					this.$('.section-content').detach();

					this.$el.empty();

					this.$el.append(this.template(_.extend({},this.contentData, { id: this.id })));

					if(this.contentView){
						this.$('.spinner').remove();
						var $cViewEl = this.contentView.render().$el;

						/*
							Take care of sliding the contentView in when it's a new one
						*/
						if(this.newContentViewAttached){
							$cViewEl.hide();
							this.$('.section-content').append(this.contentView.render().el);

							// Once the content is there, the scrollspy needs to refresh
							$.when($cViewEl.slideDown('slow')).done(function(){
								//console.log('Content slid out');
								$('[data-spy="scroll"]').each(function () {
								  	var $spy = $(this).scrollspy('refresh');
								});
							});

							this.newContentViewAttached = false;
						}
						else{
							this.$('.section-content').append(this.contentView.render().el);
						}
					}

					return this;
				},

				setContentView: function(view){
					this.contentView = view;
					this.newContentViewAttached = true;
					this.render();
				}
			}),

			SectionContentView: Backbone.View.extend({

				tagName: 'div',

				initialize: function(init){
					this.template = init.template;
					_.bindAll(this,"render");

				},

				render: function(){
					//console.log('Render about view');
					this.$el.empty();
					if(this.contentData){
						this.$el.append(this.template(this.contentData));
					}
					return this;
				},

				setContentData: function(contentData){
					this.contentData = contentData;
					this.render();
				}


			}),

			NavbarView: Backbone.View.extend({

				tagName: 'div',
				className: 'subnav',

				events: {
					'click .nav a': 'smoothScrollToAnchor'
				},

				initialize: function(init){
					this.template = Handlebars.compile($('#navbar-tmpl').html());
					_.bindAll(this, 'render', 'processScroll');

					this.navItems = [];
					this.isFixed = false;
					this.navTop = 0;
				},

				render: function(){
					this.$el.empty();
					this.$el.append(this.template({ navItems: this.navItems }));

					return this;
				},

				addSection: function(sectionView){
					this.navItems.push({ anchor: sectionView.id, name: sectionView.shortTitle });
					console.log(this.navItems);
					this.render();
				},


				processScroll: function(){
					var $win = $(window)
				    , $nav = this.$el
				    , navTop = this.navTop

					var i, scrollTop = $win.scrollTop()
			    	if (scrollTop >= navTop && !this.isFixed) {
			    		this.isFixed = true;
			    		$nav.addClass('subnav-fixed');

			    		$('[data-spy="scroll"]').each(function () {
						  var $spy = $(this).scrollspy('refresh');
						});

			    	} else if (scrollTop <= navTop && this.isFixed) {
			    		this.isFixed = false;
			    		$nav.removeClass('subnav-fixed');

			    		$('[data-spy="scroll"]').each(function () {
						  var $spy = $(this).scrollspy('refresh');
						});

			    	}
				},

				smoothScrollToAnchor: function(e){
					var subnavHeight = 38;
				    var subnavMarginBottom = 40;

					var targetAnchor = $($(e.target).attr('href'));

					var addOffset = (this.isFixed ? - subnavHeight :  - ( 2*subnavHeight + subnavMarginBottom));
					$('html,body').animate({scrollTop: $(targetAnchor).offset().top + addOffset}, 500, this.processScroll);
					e.preventDefault();		
				},

				/*
					Initializes the logic to only show the navbar at the top once you scrolled past it
				 	After this the navbar position can no longer be changed
				*/
				startScrollHandling: function(){
					this.navTop = this.$el.length && this.$el.offset().top - 40;
				    this.processScroll()
				    $(window).on('scroll', _.throttle(this.processScroll,100));
				}

			}),

			TabsView: Backbone.View.extend({

				tagName: 'div',

				initialize: function(init){
					this.template = Handlebars.compile($('#tabs-tmpl').html());
					this.tabs = [];
				},

				render: function(){
					// Detach all views first so they don't lose their event bindings
					_.each(this.tabs, function(tab){
						tab.view.$el.detach();
					}, this)

					// Clear element and render new skeleton
					this.$el.empty();
					this.$el.append(this.template({tabs: this.tabs}));

					// Insert all views in the right tab pane
					_.each(this.tabs, function(tab){
						this.$('div.' + tab.id).append(tab.view.render().el);
					},this);

					return this;
				},

				addTab: function(tab){
					// Add a unique id and make tab active if it's the first one
					var isFirst = this.tabs.length === 0;
					var internalTab = _.extend({ 'id': _.uniqueId('tab_'), 'active': isFirst}, tab);

					this.tabs.push(internalTab);
					this.render();

					return internalTab;
				}

			})


		}
	};



	// Resolve domReady Deferred on domReady
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

		/*
			Render navigation
		*/
		var subnav = new app.views.NavbarView();
		$('.main-content').append(subnav.render().el);
		subnav.startScrollHandling();
		/* 
			Render about View
		*/
		var aboutSection = new app.views.SectionView({
			id: "about",
			shortTitle: "About",
			contentData: {
				title: "About me",
				jsonLink: "json/about.json"
			}
		});

		var aboutView = new app.views.SectionContentView({
			template: Handlebars.compile($('#about-page-tmpl').html())
		});

		aboutView.setContentData(data.about);
		$('.main-content').append(aboutSection.render().el);
		aboutSection.setContentView(aboutView);

		// Add section to navigation
		subnav.addSection(aboutSection);

		/* 
			Render the rest
		*/

		var projectSection = new app.views.SectionView({
			id: "projects",
			shortTitle: "Projects",
			contentData: {
				title: "Projects and Code",
				jsonLink: "json/projects.json"
			}
		});

		$('.main-content').append(projectSection.render().el);

		// Add section to navigation
		subnav.addSection(projectSection);

		var projectTabsView = new app.views.TabsView({
			className: 'span12'
		});

		var projectView = new app.views.SectionContentView({
			template: Handlebars.compile($('#project-tmpl').html())
		});
		projectView.setContentData(data.projects[0]);

		projectTabsView.addTab({
			name: 'Spiro JS1k',
			view: projectView
		});

		projectSection.setContentView(projectTabsView);

		//var projectTabPaneTemplate = Handlebars.compile($('#project-tab-pane-tmpl').html());

		//var projectTabPane = $(projectTabPaneTemplate(data.projects[0]) + projectTabPaneTemplate(data.projects[1]));
		
		//projectTabPane.hide();
		//aboutPage.hide();

		$('.carousel').carousel({
		  interval: 3000
		});

		//$('#about-container').empty();
		//$('#about-container').append(aboutPage);

		//$('#spiro').append(projectTabPane);
		
/*		$.when(aboutPage.slideDown('slow')).done(function(){
			console.log('about is down');
			$.when(projectTabPane.slideDown('slow')).done(function(){

				$('[data-spy="scroll"]').each(function () {
				  var $spy = $(this).scrollspy('refresh');
				});



			});
			
		})
*/


	})



	$(function(){


	})
})();