<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Something bad happed</div>
    <div v-else-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.summary }}</p>
        <div v-html="post.content"></div>
    </div>
    <div v-else>
        Post not found
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { actionTypes } from '@/store/modules/post';

export default {
  name: 'PostDetail',
  data() {
    return {
      apiUrl: '/',
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.post.isLoading,
      post: (state) => state.post.data,
      error: (state) => state.post.error,
    }),
  },
  mounted() {
    var id = this.$route.params.id;
    if (id)
        this.$store.dispatch(actionTypes.getPost, { apiUrl: this.apiUrl, id });
  },
};
</script>
