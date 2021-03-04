<template>
	<header class="header text-center">
		<h1 class="blog-name pt-lg-4 mb-0"><a href="index.html">Khoa's Blog</a></h1>
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-toggle target="navigation"></b-navbar-toggle>

            <b-collapse id="navigation" is-nav class="flex-column">
                <div class="profile-section pt-3 pt-lg-0">
                    <img
                        class="profile-image mb-3 rounded-circle mx-auto"
                        src="images/profile.png"
                        alt="About Me" />

                    <div class="bio mb-3">
                        Hi, my name is Dang Khoa. Briefly introduce yourself here. You can also
                        provide a link to the about page.<br />
                        <router-link class="nav-link"
                            :to="{ name: 'about' }" exact>Find out more about me</router-link>
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

                <b-navbar-nav class="flex-column text-left">
                    <li class="nav-item active">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'home' }"
                            active-class="active"
                            exact><i class="fas fa-home fa-fw mr-2"></i> Blog Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'blogs' }"
                            active-class="active"
                            exact><i class="fas fa-bookmark fa-fw mr-2"></i> Posts Server Repl</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'blogs_graphcms' }"
                            active-class="active"
                            exact><i class="fas fa-bookmark fa-fw mr-2"></i> Posts Server GraphCMS</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'about' }"
                            active-class="active"
                            exact><i class="fas fa-user fa-fw mr-2"></i> About Me</router-link>
                    </li>
                </b-navbar-nav>

                <div class="my-2 my-md-3">
                    <a class="btn btn-primary" href="#" @click.prevent="onSubmit">Get in Touch</a>
                </div>
            </b-collapse>
        </b-navbar>
	</header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    onSubmit() {
    }
  }
};
</script>