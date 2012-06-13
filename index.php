<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<link rel="stylesheet/less" href="less/bootstrap.less" media="all" />
	<script src="js/less-1.3.0.min.js"></script>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="js/bootstrap-alert.js"></script>
	<script src="js/bootstrap-button.js"></script>
	<script src="js/bootstrap-carousel.js"></script>
	<script src="js/bootstrap-collapse.js"></script>
	<script src="js/bootstrap-dropdown.js"></script>
	<script src="js/bootstrap-modal.js"></script>
	<script src="js/bootstrap-tooltip.js"></script>
	<script src="js/bootstrap-popover.js"></script>
	<script src="js/bootstrap-scrollspy.js"></script>
	<script src="js/bootstrap-tab.js"></script>
	<script src="js/bootstrap-transition.js"></script>
	<script src="js/bootstrap-typeahead.js"></script>

</head>
<body>
	<!-- <div class="navbar navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">

				<a class="brand" href="#">Tim Beyer</a>

				<div id="main-nav" class="nav-collapse">

				</div>


			</div>
		</div>
	</div>-->
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
					<div class="span6">
						<h2>CV</h2>
						<p>

						</p>

					</div>
				</div>
				<div class="row">
					<div class="span12">
						<h2>Projects and code</h2>
						<ul class="nav nav-tabs">
							<li class="active"><a href="#booking" data-toggle="tab">Booking app</a></li>
							<li><a href="#spiro" data-toggle="tab">JS1k spiro</a></li>
						</ul>

						<div class="row">
							<div class="span12">
								<div id="myCarousel" class="carousel slide">
									<!-- Carousel items -->
									<div class="carousel-inner">
										<div class="btn-group" style="position: absolute; z-index: 1100; right: 20px; bottom: 90px;">
											<button class="btn btn-success btn-large"><i class="icon-play-circle icon-white"></i> Open Demo</button>
											<button class="btn btn-primary btn-large"><i class="icon-file icon-white"></i> View Source</button>
										</div>
										<div class="active item">
											<img src="img/spiro/spiro3-870.png"></img>
											<div class="carousel-caption">
												<h4>Second Thumbnail label</h4>
												<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
											</div>
										</div>
										<div class="item">
											<img src="img/spiro/spiro3-870.png"></img>
											<div class="carousel-caption">
												<h4>Second Thumbnail label</h4>
												<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
											</div>
										</div>
										<div class="item">
											<img src="img/spiro/spiro3-870.png"></img>
											<div class="carousel-caption">
												<h4>Second Thumbnail label</h4>
												<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
											</div>
										</div>
									</div>
									<!-- Carousel nav -->
									<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
									<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
								</div>
								<div class="tab-content">
									<div class="tab-pane " id="booking">
										Booking
									</div>
									<div class="tab-pane active" id="spiro">
										<div class="span9">

											<h3>Spirograph</h3>
											<p>
												This is my submission for 2010 JS1K competition. 
												The competition is about writing Javascript programs that fit in under 1k.
											</p>


											<h4>Code</h4>
											<pre>var a=document,b=self,c=a.getElementById("c"),d=c.getContext("2d"),e=b.innerWidth,f=b.innerHeight;c.width=e;c.height=f;var g=e/2,h=f/2,i=Math,j=i.min(g,h),k=i.cos,l=i.sin,m=i.random,n=0,o=0,p,q,r=0,s=1,t,u,v=1;a.onclick=function(){w()};a.onkeydown=function(B){switch(B.keyCode){case 67:r=!r;d.strokeStyle="white";break;case 32:w();d.fillRect(0,0,e,f);break;case 70:s=!s;d.lineWidth=s?0.1:0.5;break;case 80:x();break;case 83:window.open(c.toDataURL())}};var y=m(),z=m(),A=m();d.strokeStyle="white";d.lineWidth=0.1;d.fillRect(0,0,e,f);w();x();function w(){x();d.closePath();d.beginPath();o=n=0;z=m();A=m();y=m();x()}d.beginPath();function C(){p=g+j*y*((1-z)*l(n)+A*z*l((1-z)/z*n));q=h+j*y*((1-z)*k(n)+A*z*k((1-z)/z*n));d.lineTo(p,q);n+=0.05}function D(){d.stroke();o++;if(s?o%20==0:1)with(d){closePath();beginPath();moveTo(p,q);if(r)strokeStyle="rgb("+i.floor(m()*256)+","+i.floor(m()*256)+","+i.floor(m()*256)+")"}}function x(){if(v){t=setInterval(D,20);u=setInterval(C,10);v=0}else{clearInterval(t);clearInterval(u);v=1}};
											</pre>
										</div>
										<div class="span3">
											<div class="btn-group">
												<button class="btn btn-success btn-large"><i class="icon-play-circle icon-white"></i> Open Demo</button>
												<button class="btn btn-primary btn-large"><i class="icon-file icon-white"></i> View Source</button>
											</div>
										</div>
									</div>
								</div>

							</div>
							
						</div>
					</div>
				</div>
			</section>

		</div>

</body>
</html>