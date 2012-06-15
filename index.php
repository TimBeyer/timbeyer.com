<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	
	<link rel="stylesheet/less" href="less/bootstrap.less" media="all" />
	<script> less = {env:'development'};</script>
	<script src="js/less-1.3.0.min.js"></script>

	<!--<link rel="stylesheet" href="css/bootstrap.css" type="text/css"></link>-->

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
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

	<script src="js/underscore.js"></script>	
	<script src="js/backbone.js"></script>

	<script src="js/handlebars-1.0.0.beta.6.js"></script>
	<script src="js/handlebars-helpers.js"></script>

	<script src="js/app.js"></script>

</head>
<body data-spy="scroll">

	<div class="container">
		<header class="jumbotron masthead">
			<h1>Tim Beyer</h1>
			<p class="lead">Software engineer, web developer</p>
		</header>

		<div class="main-content">
			<div class="subnav">

				<ul class="nav nav-pills">
					<li><a href="#about-me">About</a></li>
					<li><a href="#projects">Projects</a></li>
				</ul>

			</div>			
			<section id="about-me">
				<div class="page-header">
					<h1>About me <a href="json/about.json"><span class="label label-info">.json</span></a></h1>
					
				</div>

				<div class="row" id="about-container">
					<img src="img/spinner.gif"></img>
				</div>
			</section>


			<section id="projects">
				<div class="page-header">
					<h1>Projects and code <a href="json/projects.json"><span class="label label-info">.json</span></a></h1>
				</div>

				<div class="row" id="projects-container" class="section-content">
					<div class="span12">
						<ul class="nav nav-tabs">
							<li class="active"><a href="#spiro" data-toggle="tab">JS1k spiro</a></li>
						</ul>

								
						<div class="tab-content">
							<div class="tab-pane active" id="spiro">
								
							</div>
						</div>
					</div>
				</div>

			</section>
		</div>
	</div>

	<script type="text/x-handlebars-template" id="section-tmpl">	
		<div class="page-header">
			<h1>{{title}} {{#if jsonLink}}<a href="{{jsonLink}}"><span class="label label-info">.json</span></a>{{/if}}</h1>
			
		</div>

		<div class="row" id="{{id}}-container" class="section-content">
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

	<script type="text/x-handlebars-template" id="project-tab-pane-tmpl">

		<h2>{{name}}</h2>
		<p>{{tagLine}}</p>

		{{#row}}
			{{#span 12}}
				{{carousel this.carousel "projects-carousel"}}
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

</body>
</html>