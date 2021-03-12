<template>
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-2">
                <div class="col-md-7 heading-section text-center ftco-animate">
                    <h2 class="mb-4">Articles</h2>
                    <p>The first thing you learn when you’re blogging is that people are one click away from leaving you. So you’ve got to get to the point, you can’t waste people’s time, you’ve got to give them some value for their limited attention span.</p>
                </div>
            </div>

            <ListPost1 :is_GraphCMS="is_GraphCMS"></ListPost1>
        </div>
    </section>
</template>

<script>
import ListPost1 from '@/components/ListPost1.vue';
import { contentWayPoint } from '../helpers/ui';

export default {
  name: 'Home',
  components: {
    ListPost1,
  },
  data() {
    return {
      is_GraphCMS: false
    };
  },
  methods: {
    onSubmit() {
    }
  },
  mounted() {
    contentWayPoint();
  }
};
</script>
