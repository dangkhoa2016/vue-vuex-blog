<template>
    <div id="colorlib-page">
		<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
        <Sidebar />

        <div id="colorlib-main">
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';
import { scrollToElement, burgerMenu, mobileMenuOutsideClick } from './helpers/ui';

export default {
  name: 'App',
  components: {
    Sidebar,
    Footer
  },
  mounted() {
    burgerMenu();
    mobileMenuOutsideClick();
    setTimeout(function() { scrollToElement(); }, 500);
  },
};
</script>
