<template>
	<header class="header text-center">
		<h1 class="blog-name pt-lg-4 mb-0"><a href="index.html">Khoa's Blog</a></h1>

		<nav class="navbar navbar-expand-lg navbar-dark">
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navigation"
				aria-controls="navigation"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div id="navigation" class="collapse navbar-collapse flex-column">
				<div class="profile-section pt-3 pt-lg-0">
					<img
						class="profile-image mb-3 rounded-circle mx-auto"
						src="images/profile.png"
						alt="image"
					/>

					<div class="bio mb-3">
						Hi, my name is Dang Khoa. Briefly introduce yourself here. You can also
						provide a link to the about page.<br /><a href="about.html"
							>Find out more about me</a
						>
					</div>
					<!--//bio-->
					<ul class="social-list list-inline py-3 mx-auto">
						<li class="list-inline-item">
							<a href="#"><i class="fab fa-twitter fa-fw"></i></a>
						</li>
						<li class="list-inline-item">
							<a href="#"><i class="fab fa-linkedin-in fa-fw"></i></a>
						</li>
						<li class="list-inline-item">
							<a href="#"><i class="fab fa-github-alt fa-fw"></i></a>
						</li>
						<li class="list-inline-item">
							<a href="#"><i class="fab fa-stack-overflow fa-fw"></i></a>
						</li>
						<li class="list-inline-item">
							<a href="#"><i class="fab fa-codepen fa-fw"></i></a>
						</li>
					</ul>
					<!--//social-list-->
					<hr />
				</div>
				<!--//profile-section-->

				<ul class="navbar-nav flex-column text-left">
					<li class="nav-item active">
						<router-link
							class="nav-link"
							:to="{ name: 'home' }"
							active-class="active"
							exact
							><i class="fas fa-home fa-fw mr-2"></i> Blog Home
							<span class="sr-only">(current)</span></router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'blogs' }"
							active-class="active"
							exact
							><i class="fas fa-bookmark fa-fw mr-2"></i> Posts Server
							Repl</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'blogs_graphcms' }"
							active-class="active"
							exact
							><i class="fas fa-bookmark fa-fw mr-2"></i> Posts Server
							GraphCMS</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'about' }"
							active-class="active"
							exact
							><i class="fas fa-user fa-fw mr-2"></i> About Me</router-link
						>
					</li>
				</ul>

				<div class="my-2 my-md-3">
					<a class="btn btn-primary" href="#">Get in Touch</a>
				</div>
			</div>
		</nav>
	</header>
</template>


<script>
</script>
