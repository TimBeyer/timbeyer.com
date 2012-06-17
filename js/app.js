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
					if(this.newContentViewAttached){
						//this.$('.section-content').slideUp('slow');
					}
					// If there is a contentView element, only detach it before emptying the element
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
								app.updateScrollspy();
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

					// If we have a carousel, activate it
					this.$('.carousel').carousel({
					  interval: 3000
					});
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

					// Enable scrollspy
					//this.$el.scrollspy();
					// app.updateScrollspy = _.bind(function(){
					// 	this.$el.scrollspy('refresh');
					// }, this);
				},

				render: function(){
					this.$el.empty();
					this.$el.append(this.template({ navItems: this.navItems }));

					//this.$el.scrollspy('refresh');
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

			    		//app.updateScrollspy();

			    	} else if (scrollTop <= navTop && this.isFixed) {
			    		this.isFixed = false;
			    		$nav.removeClass('subnav-fixed');

			    		//app.updateScrollspy();

			    	}
				},

				smoothScrollToAnchor: function(e){
					//console.log("Scroll")
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

				events: {
					'click .nav a': 'selectTab',
					'shown a': 'tabShown'
				},

				initialize: function(init){
					this.template = Handlebars.compile($('#tabs-tmpl').html());
					this.tabs = [];
				},

				render: function(){
					console.log('Render TabsView');
					// Detach all views first so they don't lose their event bindings
					// _.each(this.tabs, function(tab){
					// 	tab.view.$el.detach();
					// }, this)

					console.log(this.$('.tab-pane').children());
					this.$('.tab-pane').children().detach();
					// Clear element and render new skeleton
					this.$el.empty();
					this.$el.append(this.template({tabs: this.tabs}));

					// Insert all views in the right tab pane
					_.each(this.tabs, function(tab){
						this.$('#' + tab.id).append(tab.view.render().el);
					},this);

					//this.$('.nav a').first().click();

					return this;
				},

				addTab: function(tab){
					// Add a unique id
					var internalTab = _.extend({ 'id': _.uniqueId('tab_'), 'active': this.tabs.length === 0}, tab);

					this.tabs.push(internalTab);
					this.render();

					return internalTab;
				},

				selectTab: function(e){
					e.preventDefault();
					console.log(e);
					$(e.currentTarget).tab('show');

					//
				},

				tabShown: function(e){
					console.log("Tab shown, update scrollSpy");
					app.updateScrollspy();
				}

			}),

			ProjectView: Backbone.View.extend({
				tagName: 'div',

				events: {
					'click .carousel-action-buttons a': 'clickActionButton'
				},

				initialize: function(init){
					this.contentData = init.contentData || {};
					this.template = Handlebars.compile($('#project-tmpl').html());
				},

				render: function(){
					this.$el.empty();

					this.$el.append(this.template(this.contentData));
					

					// If we have a carousel, activate it
					this.$('.carousel').carousel({
					  interval: 3000
					});

					return this;
				},

				clickActionButton: function(e){
					var $target = $(e.currentTarget);
					console.log('clickActionButton', e, $target);

					// In case this is a download link,
					// use the default action
					var type = $target.data('type');
					if(type !== 'download'){
						e.preventDefault();
						switch(type){
							case 'link':
								// Open the link in a modal
								break;
							case 'source':
								// Open the source in a modal
								var sourceLink = $target.attr('href');
								console.log("sourceLink", sourceLink);

								$.ajax({
									url: sourceLink,
									dataType: 'text',
									success: function(source){
										console.log('src', source);
										var srcModalTemplate = Handlebars.compile($('#source-modal-tmpl').html());
										var $srcModal = $(srcModalTemplate({id: _.uniqueId('src-modal-'), source: source }));
										$('body').append($srcModal);
										prettyPrint();
										$srcModal.modal();
										$srcModal.on('hidden', function(){
											$srcModal.remove();
										});
									}
								});

								break;
						}
					}
				}
			})
		},

		updateScrollspy: function(){
			$('[data-spy="scroll"]').each(function () {
			  	var $spy = $(this).scrollspy('refresh');
			});		
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

		var spiroView = new app.views.ProjectView({
			contentData: data.projects[0]
		});

		projectTabsView.addTab({
			name: 'Spiro JS1k',
			view: spiroView
		});


		var trafficView = new app.views.ProjectView({
			contentData: data.projects[1]
		});

		projectTabsView.addTab({
			name: 'Traffic Sim',
			view: trafficView
		});

		projectSection.setContentView(projectTabsView);

		app.updateScrollspy();


	})



	$(function(){


	})
})();