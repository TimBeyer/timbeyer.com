<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<link rel="stylesheet/less" href="less/bootstrap.less" media="all" />
	<script> less = {env:'development'};</script>
	<script src="js/less-1.3.0.min.js"></script>

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
<body>
	<div class="navbar navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<a class="brand" href="#index">Tim Beyer</a>

				<div id="main-nav" class="nav-collapse">
					<ul class="nav">
						<li><a href="#about">About</a></li>
					</ul>
				</div>


			</div>
		</div>
	</div>
	<div class="container">
		<header>
			<div class="hero-unit">
				<h1>Tim Beyer</h1>
				<p>Software engineer, web developer</p>
			</div>
		</header>
		<section id="about-me">
			<div class="page-header">
				<h1>About me</h1>
			</div>

			<div class="row" id="about-container"></div>
		</section>


		<section id="projects">
			<div class="page-header">
				<h1>Projects and code</h1>
			</div>

			<div class="row" id="projects-container">
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

	<script type="text/x-handlebars-template" id="about-page-tmpl">
		
		<div class="span6">
			<h2>Overview</h2>

			{{#each overview}}
			<p>
				{{this}}
			</p>
			{{/each}}
		</div>

		<div class="span3">
			<h2>Personal Facts</h2>
			{{dl personalFacts}}
		</div>

		<div class="span3">
			<h2>Technical skills</h2>
			{{dl technicalSkills}}
		</div>
	</script>

	<script type="text/x-handlebars-template" id="project-tab-pane-tmpl">

		<h3>{{name}}</h3>
		<p>{{tagLine}}</p>

		<div class="row">
			<div class="span12">
			{{#with carousel}}
				<div id="myCarousel" class="carousel project-carousel slide">
					<!-- Carousel items -->
					<div class="carousel-inner">
					{{#if actionButtons}}
						<div class="btn-group carousel-action-buttons">
						{{#each actionButtons}}
							<a class="btn btn-large {{class}}" href="{{link}}"><i class="{{icon}}"></i> {{label}}</a>
						{{/each}}
						</div>
					{{/if}}
					{{#each items}}
						<div class="item">
							<img src="{{image}}"></img>
							{{#if caption}}
							<div class="carousel-caption">
								<h4>{{caption.heading}}</h4>
								<p>{{caption.content}}</p>
							</div>
							{{/if}}
						</div>
					{{/each}}
					</div>
					<!-- Carousel nav -->
					<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
					<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
				</div>
			{{/with}}
			</div>
		</div>
		<div class="row">
			<div class="span9">
				<h4>Description</h4>
				<pre>{{description}}</pre>
			</div>
			<div class="span3">
				{{dl facts}}
			</div>
		</div>

	</script>

</body>
</html>