<template>
  <b-modal modal-class="postModal" title="" ok-only size="lg" @show="loadPost"
    no-close-on-backdrop v-model="show" @hide="callOnHide" ok-title="Close"
    footer-class="justify-content-between">
    <div v-if="isLoading">Loading post: {{id}}</div>
    <div v-else-if="error">Something bad happened</div>
    <PostDisplay v-else-if="post" :post="post" :callOtherPost="callOtherPost" />
    <div v-else>
        <b>Post not found.</b>
    </div>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex';
import PostDisplay from './PostDisplay.vue';
import { actionTypes } from '@/store/modules/post';

export default {
  name: 'PostModal',
  data() {
    return {
      apiUrl: '/',
      show: false
    };
  },
  components: {
    PostDisplay,
  },
  props: {
    id: {
        type: String,
        default: () => ""
    },
    is_GraphCMS: {
        required: true,
        type: Boolean
    },
    callOtherPost: { type: Function }
  },
  watch: {
    id: {
        // This will let Vue know to look inside the array
        deep: false,

        // We have to move our method to a handler field
        // eslint-disable-next-line
        handler (newId, oldId) {
            if (newId) {
                if (this.show)
                    this.loadPost();
                else
                    this.show = true;
            } else
                this.show = false;
        }
    }
  },
  computed: {
    ...mapState({
      post: (state) => state.post.data,
      isLoading: (state) => state.post.isLoading,
      error: (state) => state.post.error,
    }),
  },
  mounted() {
    this.loadPost();
  },
  methods: {
    loadPost () {
        if (this.id)
            this.$store.dispatch(actionTypes.getPost, { is_GraphCMS: this.is_GraphCMS, id: this.id });
    },
    callOnHide() {
        this.show = false;
        this.$parent.setPostId('');
    }
  }
};
</script>
