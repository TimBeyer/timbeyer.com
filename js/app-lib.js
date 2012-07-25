(function(namespace){

	var app = {

		views: {
			SectionView: Backbone.View.extend({

				tagName: "section",

				initialize: function(init){
					// id is automatically filtered out and applied to the element

					this.template = Handlebars.compile($('#section-tmpl').html());
					this.contentData = init.contentData;
					this.shortTitle = init.shortTitle;

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

						this.$('.section-content').append(this.contentView.render().el);						
					}

					return this;
				},

				setContentView: function(view){
					this.contentView = view;
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
				className: 'subnav animate',

				events: {
					'click .nav a': 'smoothScrollToAnchor'
				},

				initialize: function(init){
					this.template = Handlebars.compile($('#navbar-tmpl').html());
					_.bindAll(this, 'render', 'processScroll');

					this.navItems = [];
					this.isFixed = false;
					this.navTop = 0;

					this.placeholder = $('<div class="subnav-placeholder"></div>');
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
					this.render();
				},


				processScroll: function(){
					var $win = $(window)
				    , $nav = this.$el
				    , navTop = this.navTop;


					var i, scrollTop = $win.scrollTop();
			    	if (scrollTop >= navTop && !this.isFixed) {
			    		this.isFixed = true;
			    		$nav.addClass('subnav-fixed');
			    		$('.main-content').prepend(this.placeholder);

			    		//app.updateScrollspy();

			    	} else if (scrollTop <= navTop && this.isFixed) {
			    		this.isFixed = false;
			    		$nav.removeClass('subnav-fixed');
			    		this.placeholder.detach();
			    		//app.updateScrollspy();

			    	}
			    	return true;
				},

				smoothScrollToAnchor: function(e){
					var subnavHeight = 38;
				    var subnavMarginBottom = 40;

					var targetAnchor = $($(e.target).attr('href'));

					//var addOffset = 0;//(this.isFixed ? - subnavHeight :  - ( 2*subnavHeight + subnavMarginBottom));
					var addOffset =  -subnavHeight;
					$('html,body').animate({scrollTop: $(targetAnchor).offset().top + addOffset}, 500, this.processScroll);
					e.preventDefault();		
				},

				/*
					Initializes the logic to only show the navbar at the top once you scrolled past it
				 	After this the navbar position can no longer be changed
				*/
				startScrollHandling: function(){
					this.navTop = this.$el.length && this.$el.offset().top;
				    this.processScroll()
				    $(window).on('scroll', _.throttle(this.processScroll,33));
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
					// Detach all views first so they don't lose their event bindings

					this.$('.tab-pane').children().detach();
					// Clear element and render new skeleton
					this.$el.empty();
					this.$el.append(this.template({tabs: this.tabs}));

					// Insert all views in the right tab pane
					_.each(this.tabs, function(tab){
						this.$('#' + tab.id).append(tab.view.render().el);
					},this);


					return this;
				},

				addTab: function(tab){
					var internalTab = _.extend({ 'active': this.tabs.length === 0}, tab);

					this.tabs.push(internalTab);
					this.render();

					return internalTab;
				},

				selectTab: function(e){
					e.preventDefault();
					this.$('.tab-pane.active .carousel').carousel('pause');
					$(e.currentTarget).tab('show');

					//
				},

				tabShown: function(e){
					app.updateScrollspy();
					this.$('.tab-pane.active .carousel').carousel('cycle');

				},

				clearTabs: function(){
					this.tabs = [];
					this.render();
				}

			}),

			ProjectView: Backbone.View.extend({
				tagName: 'div',

				events: {
					'click .carousel-action-buttons a': 'clickActionButton'
				},

				initialize: function(init){
					this.project = init.project || {};
					this.template = Handlebars.compile($('#project-tmpl').html());
				},

				render: function(){
					this.$el.empty();

					this.$el.append(this.template(this.project));
					

					// If we have a carousel, activate it
					this.$('.carousel').carousel({
					  interval: 4000
					});
					this.$('.carousel').carousel('pause');

					return this;
				},

				clickActionButton: function(e){
					var $target = $(e.currentTarget);

					// In case this is a download link,
					// use the default action
					var type = $target.data('type');
					if(type !== 'download' && type !== 'link'){
						e.preventDefault();
						switch(type){

							case 'link-modal':
								// Open the link in a modal
								var source = $target.attr('href');

								var iframeModalTemplate = Handlebars.compile($('#iframe-modal-tmpl').html());
								var $iframeModal = $(iframeModalTemplate({id: _.uniqueId('iframe-modal-'), source: source, name: this.project.name}));
								$('body').append($iframeModal);
								prettyPrint();
								$iframeModal.modal();
								$iframeModal.on('hidden', function(){
									$iframeModal.remove();
								});								
								break;
							case 'source-modal':
								// Open the source in a modal
								var sourceLink = $target.attr('href');

								$.ajax({
									url: sourceLink,
									dataType: 'text',
									success: function(source){
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
			}),

			ProjectsView: Backbone.View.extend({
				tagName: 'div',

				initialize: function(init){
					this.projects = {};
					this.projectViews = {};
					
					this.tabsView = new app.views.TabsView({
						className: "span12"
					});

					this.addProjects(init.projects);

					_.bindAll(this, 'render');
				},

				render: function(){

					// Detach the tabs view so it doesn't lose 
					// its event bindings
					this.tabsView.$el.detach();
					// Remove all tabs
					this.tabsView.clearTabs();

					// Empty this element now that the tabs are detached
					this.$el.empty();

					// Detach all projectViews
					_.each(this.projectViews, function(projectView, projectId){
						projectView.$el.detach();
					});

					// Iterate over projects
					// and add them to the tabsView
					_.each(this.projects, function(project, projectId){
						this.tabsView.addTab({
							name: project.tabName,
							id: "tab_" + projectId,
							view: this.projectViews[projectId]
						});
					},this);


					this.$el.append(this.tabsView.render().el);

					return this;
				},

				addProjects: function(projects){
					// Add the projects to the current project list
					this.projects = _.extend(this.projects, projects);
					_.each(projects, function(project, projectId){

						// Create all the views
						this.projectViews[projectId] = new app.views.ProjectView({
							project: project
						});
					},this)					
				}
			})
		},

		updateScrollspy: function(){
			$('[data-spy="scroll"]').each(function () {
			  	var $spy = $(this).scrollspy('refresh');
			});		
		}
	};

	namespace.tbapp = app;
 
}(window));