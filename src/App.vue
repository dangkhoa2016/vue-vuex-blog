<template>
  <div id="app">
    <Header />
    
    <div class="main-wrapper">
        <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  mounted() {
    if (typeof window['LoadTheme'] === 'function')
        window['LoadTheme']();
  },
};
</script>
