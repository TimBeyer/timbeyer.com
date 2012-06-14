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

			<div class="row">
				<div class="span6">
					<h2>Overview</h2>
					<p>
						Born in 1987 in Germany, I finished school in 2008 with a specialization in
						Math and French and went to study <em>knowledge engineering</em> 
						at the <em>Maastricht University</em> in the same year.
					</p>

					<p>
						In 2010 I started working for the <em>Department of Marketing and Communications</em>
						of the <em>Maastricht University</em> as a student assistant working mainly on their 
						website and other web projects.
					</p>

					<p>
						From 2011 until  2012 I was a web developer at <em>Ideaspool</em>, where we continued the collaboration
						with the <em>Maastricht University</em> and a diverse list of other clients.
					</p>
				</div>

				<div class="span3">
					<h2>Personal Facts</h2>
					<dl>
						<dt>Age<dt>
						<dd>24</dd>

						<dt>Nationality</dt>
						<dd>German</dd>

						<dt>Hometown</dt>
						<dd>Kiel</dd>

						<dt>Spoken Languages</dt>
						<dd>German</dd>
						<dd>English</dd>
						<dd>French</dd>
						<dd>Dutch</dd>
					</dl>
					</div>

					<div class="span3">
						<h2>Technical skills</h2>
						<dl class="">
							<dt>Programming Languages</dt>
							<dd>Javascript</dd>
							<dd>Python</dd>
							<dd>PHP</dd>
							<dd>Java</dd>

							<dt>Technologies</dt>
							<dd>Backbone.js</dd>
							<dd>Knockout.js</dd>
							<dd>HTML5</dd>
							<dd>Less</dd>
							<dd>Bootstrap</dd>
						</dl>
					</div>
				</div>

				<div class="row">
					<div class="span12">
						<h2>Projects and code</h2>
						<ul class="nav nav-tabs">
							<li class="active"><a href="#booking" data-toggle="tab">Booking app</a></li>
							<li><a href="#spiro" data-toggle="tab">JS1k spiro</a></li>
						</ul>

								
						<div class="tab-content">
							<div class="tab-pane " id="booking">
								Booking
							</div>
							<div class="tab-pane active" id="spiro">
								<h3>Spirograph</h3>
								<p>
									This is my submission for 2010 JS1K competition, which is about writing Javascript programs that fit in under 1k.
								</p>

								<div class="row">
									<div class="span12">
										<div id="myCarousel" class="carousel project-carousel slide">
											<!-- Carousel items -->
											<div class="carousel-inner">
												<div class="btn-group carousel-action-buttons">
													<button class="btn btn-success btn-large"><i class="icon-play-circle icon-white"></i> Open Demo</button>
													<button class="btn btn-primary btn-large"><i class="icon-file icon-white"></i> View Source</button>
												</div>
												<div class="active item">
													<img src="img/spiro/spiro3-1170.png"></img>
													<div class="carousel-caption">
														<h4>Second Thumbnail label</h4>
														<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
													</div>
												</div>
												<div class="item">
													<img src="img/spiro/spiro4-1170.png"></img>
													<!--<div class="carousel-caption">
														<h4>Second Thumbnail label</h4>
														<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
													</div>-->
												</div>
												<div class="item">
													<img src="img/spiro/spiro1-1170.png"></img>
													<!--<div class="carousel-caption">
														<h4>Second Thumbnail label</h4>
														<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
													</div>-->
												</div>
											</div>
											<!-- Carousel nav -->
											<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
											<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="span9">



										<h4>Description</h4>
										<pre>Creates random animated Spirograph patterns
Left click to add another random pattern on top
Press "C" to toggle colors
Press "F" to toggle fade effect
Press "P" to pause
Press "Space" to reset
Press "S" to save the picture
										</pre>
									</div>
									<div class="span3">
										<dl>
											<dt>Language<dt>
											<dd>Javascript</dd>

											<dt>Size</dt>
											<dd>1022 bytes</dd>

											<dt>Link</dt>
											<dd><a href="http://js1k.com/2010-first/demo/281">http://js1k.com/2010-first/demo/281</a></dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</section>

	</div>

	<script type="text/x-handlebars-template" id="project-tab-pane">
		<div class="tab-pane">
			<h3>{{name}}</h3>
			<p>{{tagLine}}</p>

			<div class="row">
				<div class="span12">
				{{#with carousel}}
					<div id="myCarousel" class="carousel project-carousel slide">
						<!-- Carousel items -->
						<div class="carousel-inner">
							<div class="btn-group carousel-action-buttons">
							{{#each actionButtons}}
								<a class="btn btn-large {{class}}" href="{{link}}"><i class={{icon}}></i> {{label}}</a>
							{{/each}}
							</div>

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
					<dl>
					{{#each facts}}
						<dt>{{this.label}}</dt>
						{{#each this.items}}
							<dd>{{this}}</dd>
						{{/each}}
					{{/each}}
					</dl>
				</div>
			</div>
		</div>
	</script>
	<script type="text/x-handlebars-template" id="carousel-item">

	</script>
	<script type="text/x-handlebars-template" id="carousel">

	</script>
</body>
</html>