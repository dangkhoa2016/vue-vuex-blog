<template>
    <section class="blog-list px-3 py-5 p-md-5">
        <ListPost :is_GraphCMS="is_GraphCMS" />
    </section>
</template>

<script>
import ListPost from '@/components/ListPost.vue';
export default {
  name: 'Blogs',
  components: {
    ListPost,
  },
  data() {
    return {
      apiUrl: '/',
      is_GraphCMS: false
    };
  },
};
</script>
