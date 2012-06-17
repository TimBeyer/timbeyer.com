<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	
<!-- 	<link rel="stylesheet/less" href="less/bootstrap.less" media="all" />
	<script> less = {env:'development'};</script>
	<script src="js/less-1.3.0.min.js"></script>
 -->
	<link rel="stylesheet" href="css/bootstrap.css" type="text/css"></link>
	<link rel="stylesheet" href="css/prettify.css" type="text/css"></link>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>


</head>
<body>

	<div class="container">
		<header class="jumbotron masthead">
			<h1>Tim Beyer</h1>
			<p class="lead">Software engineer, web developer</p>
		</header>

		<div class="main-content">

			<!-- Fallback for browsers with JS disabled -->
			<noscript>
				<div class="row" style="text-align: center">
					<h2>To see more information, please enable Javascript and reload the page</h2>
				</div>
				<section id="about">	
					<div class="page-header">
						<h1>About me <a href="json/about.json"><span class="label label-info">.json</span></a></h1>
						
					</div>

					<div class="row section-content" id="about-container">
		
						<div class="span6">
							<h2>Overview</h2>
							<p>Born in 1987 in Germany, I finished school in 2008 with a specialization in Math and French and went to study knowledge engineering at the Maastricht University in the same year.</p><p>In 2010 I started working for the Department of Marketing and Communications of the Maastricht University as a student assistant working mainly on their website and other web projects.</p><p>From 2011 until 2012 I was a web developer at Ideaspool, where we continued the collaboration with the Maastricht University and a diverse list of other clients.</p><p>I enjoy working on user interfaces and data visualization, especially in the browser.</p>
						</div>

						<div class="span3">
							<h2>Personal Facts</h2>
							<dl><dt>Age</dt><dd>24</dd><dt>Nationality</dt><dd>German</dd><dt>Hometown</dt><dd>Kiel</dd><dt>Spoken Languages</dt><dd>German</dd><dd>English</dd><dd>French</dd><dd>Dutch</dd></dl>
						</div>

						<div class="span3">
							<h2>Technical skills</h2>
							<dl><dt>Programming Languages</dt><dd>Javascript</dd><dd>Python</dd><dd>PHP</dd><dd>Java</dd><dt>Technologies</dt><dd>Backbone.js</dd><dd>Knockout.js</dd><dd>HTML5</dd><dd>LESS</dd><dd>Twitter Bootstrap</dd></dl>
						</div>
					</div>
				</section>
			</noscript>
			<!-- End Fallback -->

		</div>
	</div>

	<script type="text/x-handlebars-template" id="tabs-tmpl">
		<ul class="nav nav-tabs">
		{{#each tabs}}
			<li {{#if active}}class="active"{{/if}}><a href="#{{id}}">{{name}}</a></li>
		{{/each}}
		</ul>		
		<div class="tab-content">
		{{#each tabs}}
			<div class="tab-pane {{#if active}} active {{/if}} {{id}}" id="{{id}}"></div>
		{{/each}}
		</div>
	</script>

	<script type="text/x-handlebars-template" id="navbar-tmpl">
		<ul class="nav nav-pills">
		{{#each navItems}}
			<li><a href="#{{anchor}}">{{name}}</a></li>
		{{/each}}
		</ul>
	</script>

	<script type="text/x-handlebars-template" id="section-tmpl">	
		<div class="page-header">
			<h1>{{title}} {{#if jsonLink}}<a href="{{jsonLink}}"><span class="label label-info">.json</span></a>{{/if}}</h1>
			
		</div>

		<div class="row section-content" id="{{id}}-container">
			<img src="img/spinner.gif" class="spinner centered"></img>
		</div>
	</script>

	<script type="text/x-handlebars-template" id="about-page-tmpl">
		
		{{#span 6}}
			<h2>Overview</h2>
			{{p overview}}
		{{/span}}

		{{#span 3}}
			<h2>Personal Facts</h2>
			{{dl personalFacts}}
		{{/span}}

		{{#span 3}}
			<h2>Technical skills</h2>
			{{dl technicalSkills}}
		{{/span}}
	</script>

	<script type="text/x-handlebars-template" id="project-tmpl">

		<h2>{{name}}</h2>
		<p>{{tagLine}}</p>

		{{#row}}
			{{#span 12}}
				{{carousel this.carousel this.carousel.id}}
			{{/span}}
		{{/row}}
		{{#row}}
			{{#span 9}}
				<h3>Description</h3>
				<pre>{{description}}</pre>
			{{/span}}
			{{#span 3}}
				<h3>Facts</h3>
				{{dl facts}}
			{{/span}}
		{{/row}}

	</script>

	<script type="text/x-handlebars-template" id="source-modal-tmpl">
		<div class="modal large hide fade" id="{{id}}">
		  <div class="modal-header">
		    <button type="button" class="close" data-dismiss="modal">×</button>
		    <h3>Source</h3>
		  </div>
		  <div class="modal-body">
		    <pre class="prettyprint">{{source}}</pre>
		  </div>
		  <div class="modal-footer">
		    <a href="#" class="btn" data-dismiss="modal">Close</a>
		  </div>
		</div>
	</script>

	<script type="text/x-handlebars-template" id="iframe-modal-tmpl">
		<div class="modal large hide fade" id="{{id}}">
		  <div class="modal-header">
		    <button type="button" class="close" data-dismiss="modal">×</button>
		    <h3>{{name}}</h3>
		  </div>
		  <div class="modal-body">
		    <iframe src="{{source}}" width="100%" height="550px" seamless="seamless" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
		  </div>
		  <div class="modal-footer">
		    <a href="#" class="btn" data-dismiss="modal">Close</a>
		  </div>
		</div>
	</script>

	<!-- Load all scripts after content was rendered -->
	<script src="js/prettify/prettify.js"></script>
	<script src="js/prettify/lang-css.js"></script>

	<script src="js/bootstrap/bootstrap-alert.js"></script>
	<script src="js/bootstrap/bootstrap-button.js"></script>
	<script src="js/bootstrap/bootstrap-carousel.js"></script>
	<script src="js/bootstrap/bootstrap-collapse.js"></script>
	<script src="js/bootstrap/bootstrap-dropdown.js"></script>
	<script src="js/bootstrap/bootstrap-modal.js"></script>
	<script src="js/bootstrap/bootstrap-tooltip.js"></script>
	<script src="js/bootstrap/bootstrap-popover.js"></script>
	<script src="js/bootstrap/bootstrap-scrollspy.js"></script>
	<script src="js/bootstrap/bootstrap-tab.js"></script>
	<script src="js/bootstrap/bootstrap-transition.js"></script>
	<script src="js/bootstrap/bootstrap-typeahead.js"></script>
	
	<!--<script src="js/bootstrap/bootstrap.min.js"></script>-->
	<script src="js/bootstrap/bootstrap-custom.js"></script>

	<!--<script src="js/underscore.js"></script>-->	
	<script src="js/underscore-min.js"></script>	
	<!--<script src="js/backbone.js"></script>-->
	<script src="js/backbone-min.js"></script>

	<script src="js/handlebars-1.0.0.beta.6.js"></script>
	<script src="js/handlebars-helpers.js"></script>

	<script src="js/app.js"></script>
</body>
</html>