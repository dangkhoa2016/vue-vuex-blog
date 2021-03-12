<template>
    <section class="blog-list px-3 py-5 p-md-5">
        <ListPost3 :is_GraphCMS="is_GraphCMS" />
    </section>
</template>

<script>
import ListPost3 from '@/components/ListPost3.vue';
export default {
  name: 'BlogsWithGraphCMS',
  components: {
    ListPost3,
  },
  data() {
    return {
      apiUrl: '/',
      is_GraphCMS: true
    };
  },
};
</script>
