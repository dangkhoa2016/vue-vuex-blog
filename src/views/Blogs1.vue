<template>
    <section class="ftco-section">
        <div class="container">
            <ListPost1 :is_GraphCMS="is_GraphCMS" />
        </div>
    </section>
</template>

<script>
import ListPost1 from '@/components/ListPost1.vue';
import { contentWayPoint } from '../helpers/ui';

export default {
  name: 'Blogs1',
  components: {
    ListPost1,
  },
  data() {
    return {
      apiUrl: '/',
      is_GraphCMS: false
    };
  },
  mounted() {
    contentWayPoint();
  }
};
</script>
