<template>
    <div class="container">
        <div v-if="isLoading"><b>Loading...</b></div>
        <div v-else-if="error">Something bad happened</div>
        <div v-else-if="posts && posts.length > 0">
            <div class="item mb-5" v-for="(post, index) in posts" :key="index">
                <div class="media">
                    <img class="mr-3 img-fluid post-thumb d-none d-md-flex" :src="post.photo" :alt="post.title">
                    <div class="media-body">
                        <h3 class="title mb-1"><a href="" @click.prevent="setPostId(post.id)">{{post.title}}</a></h3>
                        <div class="meta mb-1">
                            <span class="date">Published 3 months ago</span>
                            <span class="comment"><a href="">{{post.comments.length}} comments</a></span>
                        </div>
                        <div class="intro">{{post.summary}}</div>
                        <a class="more-link" href="" @click.prevent="setPostId(post.id)">Read more &rarr;</a>
                    </div><!--//media-body-->
                </div><!--//media-->
            </div><!--//item-->
            
            <nav class="blog-nav nav nav-justified my-5">
                <a class="nav-link-prev nav-item nav-link rounded-left" id="lnk-prev"
                    href="#" @click.prevent="handleClick(false)">Newer posts<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                <a class="nav-link-next nav-item nav-link rounded-right" id="lnk-next"
                    href="#" @click.prevent="handleClick(true)">Older posts<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
            </nav>
        </div>
        <div v-else>
            <b>No posts found!</b>
            <nav class="blog-nav nav nav-justified my-5">
                <a class="nav-link-prev nav-item nav-link rounded-left" id="lnk-prev"
                    href="#" @click.prevent="handleClick(false)">Newer posts<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
            </nav>
        </div>

        <PostModal :id="postId" :is_GraphCMS="is_GraphCMS" :callOtherPost="callOtherPost" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PostModal from './PostModal.vue';
import { actionTypes } from '@/store/modules/posts';

export default {
  name: 'ListPost',
  components: {
    PostModal,
  },
  data() {
    return {
        postId: "",
        page_index: 1
    }
  },
  props: {
    is_GraphCMS: {
        required: true,
        type: Boolean
    }
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.posts.isLoading,
      posts: (state) => state.posts.data,
      error: (state) => state.posts.error,
    }),
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
        this.$store.dispatch(actionTypes.getPosts, { is_GraphCMS: this.is_GraphCMS, page_index: this.page_index });
    },
    setPostId(id) {
        this.postId = id;
    },
    handleClick(is_next) {
        if (is_next) {
            this.page_index += 1;
            console.log('load next', this.page_index);
            this.loadPosts();
        }
        else if (this.page_index > 1) {
            console.log('load prev');
            this.page_index -= 1;
            this.loadPosts();
        }
    },
    scrollTop() {
        // eslint-disable-next-line
        $("body div[id^='__BVID__'] .postModal").animate({ scrollTop: 0 }, 'slow');
    },
    callOtherPost(is_next) {
        if (this.postId && this.posts.length > 0) {
            var index = this.posts.findIndex(n => n.id === this.postId);
            if (is_next && index < this.posts.length - 1) {
                this.scrollTop();
                this.setPostId(this.posts[index + 1].id);
            } else if (!is_next && index > 0) {
                this.scrollTop();
                this.setPostId(this.posts[index - 1].id);
            }
        }
    }
  },
};
</script>
