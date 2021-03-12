<template>
    <div>
        <div class="row m-5" v-if="isLoading"><b>Loading...</b></div>
        <div class="row m-5" v-else-if="error">Something bad happened</div>
        <div class="row" v-else-if="posts && posts.length > 0">
            <div class="col-md-4" v-for="(post, index) in posts" :key="index">
                <div class="blog-entry ftco-animate">
                    <router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs1' } }"
                    class="img img-2" :style="$func.ext_BgImage(post.photo)" />
                    <div class="text text-2 pt-2 mt-3">
                        <span class="category mb-3 d-block"><a href="#">Technology</a></span>
                        <h3 class="mb-4"><router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs1' } }">{{post.title}}</router-link></h3>
                        <p class="mb-4">{{post.summary}}</p>
                        <div class="author mb-4 d-flex align-items-center">
                            <a href="#" class="img" :style="$func.ext_BgImage('/images/person_2.jpg')"></a>
                            <div class="ml-3 info">
                                <span>Written by</span>
                                <h3><a href="#">{{post.user ? post.user.name : post.author.name}}</a>, <span>{{post.createdAt | formatShortDate}}</span></h3>
                            </div>
                        </div>
                        <div class="meta-wrap align-items-center">
                            <div class="half order-md-last">
                                <p class="meta">
                                    <span><i class="icon-heart"></i> {{ $func.ext_RandomCount() }}</span>
                                    <span><i class="icon-eye"></i> {{ $func.ext_RandomCount() }}</span>
                                    <span><i class="icon-comment"></i> {{ post.comments.length }}</span>
                                </p>
                            </div>
                            <div class="half">
                                <p><router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs1' } }" class="btn py-2">Continue Reading <span class="ion-ios-arrow-forward"></span></router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5" v-else>
            <b>No posts found!</b>
        </div>

        <div class="row">
            <div class="col">
                <paginate
                    :page-count="pageCount"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="pagingCallback"
                    :prev-text="'Prev'"
                    :prev-link-class="'page-link'"
                    :next-text="'Next'"
                    :next-link-class="'page-link'"
                    :page-link-class="'page-link'"
                    :container-class="'pagination'"
                    :page-class="'page-item'"
                    :prev-class="'page-item'"
                    :next-class="'page-item'">
                </paginate>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/posts';
import { contentWayPoint, scrollTop } from '../helpers/ui';

export default {
  name: 'ListPost1',
  components: {
  },
  data() {
    return {
        postId: "",
        page_size: 6,
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
      posts: (state) => state.posts.data.data,
      error: (state) => state.posts.error,
      pageCount: function (state) {
          if (state.posts.data.last_page)
            return state.posts.data.last_page;
          else
            return typeof this !== 'undefined' ? this.page_index : 1;
      },
    }),
  },
  watch: {
      posts(newPosts) {
        if (newPosts) {
            this.$nextTick(() => {
                contentWayPoint();
            });
        }
      },
      page_index() {
        this.loadPosts();
      }
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
        this.$store.dispatch(actionTypes.getPosts, { is_GraphCMS: this.is_GraphCMS, page_index: this.page_index, page_size: this.page_size });
    },
    setPostId(id) {
        this.postId = id;
    },
    pagingCallback(e) {
        scrollTop();
        this.page_index = e;
    }
  },
};
</script>
