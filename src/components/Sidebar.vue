<template>
	<aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">
        <h1 id="colorlib-logo"><a href="index.html">Khoa<span>.</span></a></h1>
        <nav id="colorlib-main-menu" role="navigation">
            <ul>
                <router-link tag="li" active-class="colorlib-active"
                    :to="{ name: 'home' }" exact><a>Home</a></router-link>
                <router-link tag="li" active-class="colorlib-active"
                    :to="{ name: 'blogs1' }" exact><a>Blogs 1</a></router-link>
                <router-link tag="li" active-class="colorlib-active"
                    :to="{ name: 'blogs2' }" exact><a>Blogs 2</a></router-link>
                <router-link tag="li" active-class="colorlib-active"
                    :to="{ name: 'blogs_graphcms' }" exact><a>Blogs GraphCMS</a></router-link>
                <router-link tag="li" active-class="colorlib-active"
                    :to="{ name: 'about' }" exact><a>About</a></router-link>
                <router-link tag="li" active-class="colorlib-active"
                    :to="{ name: 'contact' }" exact><a>Contact</a></router-link>
            </ul>
        </nav>

        <div class="colorlib-footer">
            <p>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy; <label>{{currentYear}}</label> All rights reserved | This template is
                made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com"
                    target="_blank">Colorlib</a>
            </p>
            <ul>
                <li><a href="#"><i class="icon-facebook"></i></a></li>
                <li><a href="#"><i class="icon-twitter"></i></a></li>
                <li><a href="#"><i class="icon-instagram"></i></a></li>
                <li><a href="#"><i class="icon-linkedin"></i></a></li>
            </ul>
        </div>
    </aside>
</template>


<script>

export default {
  name: 'App',
  data() {
    return {
        currentYear: new Date().getFullYear()
    }
  },
  mounted() {
  },
};
</script>

