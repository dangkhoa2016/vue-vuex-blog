<template>
    <ListPost3 :is_GraphCMS="is_GraphCMS" />
</template>

<script>
import ListPost3 from '@/components/ListPost3.vue';
import { fullHeight, contentWayPoint } from '../helpers/ui';

export default {
  name: 'Blogs3',
  components: {
    ListPost3,
  },
  data() {
    return {
      is_GraphCMS: true
    };
  },
  mounted() {
    fullHeight();
    contentWayPoint();
  }
};
</script>
