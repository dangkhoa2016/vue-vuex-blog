<template>
    <ListPost2 :is_GraphCMS="is_GraphCMS" />
</template>

<script>
import ListPost2 from '@/components/ListPost2.vue';
import { fullHeight, carousel, contentWayPoint } from '../helpers/ui';

export default {
  name: 'Blogs2',
  components: {
    ListPost2,
  },
  data() {
    return {
      apiUrl: '/',
      is_GraphCMS: false
    };
  },
  mounted() {
    fullHeight();
    contentWayPoint();
    carousel();
  }
};
</script>
