<template>
    <div>
        <section class="home-slider js-fullheight owl-carousel">
            <div class="slider-item js-fullheight" :style="$func.ext_BgImage('/images/bg_2.jpg')">
                <div class="overlay"></div>
                <div class="container-fluid">
                    <div class="row no-gutters slider-text slider-text-2 js-fullheight align-items-center justify-content-center"
                        data-scrollax-parent="true">
                        <div class="col-md-10 text-center ftco-animate"
                            :data-scrollax='`properties: { translateY: "70%" }`'>
                            <h1 class="mb-4" :data-scrollax='`properties: { translateY: "30%", opacity: 1.6 }`'>Discover the Place</h1>
                            <p :data-scrollax='`properties: { translateY: "30%", opacity: 1.6 }`'>Find great places to stay, eat, shop, or visit from local experts</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slider-item js-fullheight" :style="$func.ext_BgImage('/images/bg_4.jpg')">
                <div class="overlay"></div>
                <div class="container-fluid">
                    <div class="row no-gutters slider-text slider-text-2 js-fullheight align-items-center justify-content-center"
                        data-scrollax-parent="true">
                        <div class="col-md-10 text-center ftco-animate"
                            data-scrollax=" properties: { translateY: '70%' }">
                            <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Technology</h1>
                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">is best when it brings people together</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slider-item js-fullheight" :style="$func.ext_BgImage('/images/bg_3.jpg')">
                <div class="overlay"></div>
                <div class="container-fluid">
                    <div class="row no-gutters slider-text slider-text-2 js-fullheight align-items-center justify-content-center"
                        data-scrollax-parent="true">
                        <div class="col-md-10 text-center ftco-animate"
                            data-scrollax=" properties: { translateY: '70%' }">
                            <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Explore and travel</h1>
                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat, shop, or visit from local experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="ftco-section" id="blogs-list">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row m-5" v-if="isLoading"><b>Loading...</b></div>
                        <div class="row m-5" v-else-if="error">Something bad happened</div>
                        <div class="row" v-else-if="posts && posts.length > 0">
                            <div class="col-md-12" v-for="(post, index) in posts" :key="index">
                                <div class="blog-entry ftco-animate">
                                    <router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs2' } }"
                                        class="img" :style="$func.ext_BgImage(post.photo)" />
                                    <div class="text pt-2 mt-3">
                                        <span class="category mb-1 d-block"><a href="#">Technology</a></span>
                                        <h3 class="mb-4"><router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs2' } }">{{post.title}}</router-link></h3>
                                        <p class="mb-4">{{post.summary}}</p>
                                        <div class="author mb-4 d-flex align-items-center">
                                            <a href="#" class="img" :style="$func.ext_BgImage('/images/person_1.jpg')"></a>
                                            <div class="ml-3 info">
                                                <span>Written by</span>
                                                <h3><a href="#">{{post.user ? post.user.name : post.author.name}}</a>, <span>{{post.createdAt | formatShortDate}}</span></h3>
                                            </div>
                                        </div>
                                        <div class="meta-wrap d-md-flex align-items-center">
                                            <div class="half order-md-last text-md-right">
                                                <p class="meta">
                                                    <span><i class="icon-heart"></i> {{ $func.ext_RandomCount() }}</span>
                                                    <span><i class="icon-eye"></i> {{ $func.ext_RandomCount() }}</span>
                                                    <span><i class="icon-comment"></i> {{ post.comments.length }}</span>
                                                </p>
                                            </div>
                                            <div class="half">
                                                <p><router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs2' } }" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading <span class="ion-ios-arrow-forward"></span></router-link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-5" v-else>
                            <b>No posts found!</b>
                        </div>
                        <div class="row mt-5">
                            <div class="col">
                                <div class="block-27">
                                    <paginate
                                        :page-count="pageCount"
                                        :page-range="3"
                                        :margin-pages="2"
                                        :click-handler="pagingCallback"
                                        :prev-text="'<i class=icon-arrow-left></i>'"
                                        :next-text="'<i class=icon-arrow-right></i>'">
                                    </paginate>
                                </div>
                            </div>
                        </div>
                    </div><!-- END-->

                    <Rightbar />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/posts';
import { contentWayPoint, scrollTop } from '../helpers/ui';
import Rightbar from '@/components/Rightbar.vue';

export default {
  name: 'ListPost2',
  components: {
    Rightbar
  },
  data() {
    return {
        postId: "",
        page_size: 4,
        page_index: 1
    }
  },
  props: {
    is_GraphCMS: {
        required: true,
        type: Boolean
    }
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
        scrollTop('#blogs-list');
        this.page_index = e;
    }
  },
};
</script>
