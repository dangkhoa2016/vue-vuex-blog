<template>
    <div>
        <div class="hero-wrap hero-wrap-2 js-fullheight" :style="$func.ext_BgImage('/images/bg_1.jpg')"
            data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="js-fullheight d-flex justify-content-center align-items-center ftco-animate">
                <div class="col-md-8 text text-center">
                    <div class="img mb-4" :style="$func.ext_BgImage('/images/author.jpg')"></div>
                    <div class="desc">
                        <h2 class="">Hello I'm</h2>
                        <h1 class="mb-4">Dang Khoa</h1>
                        <p class="mb-4">I am A Blogger Far far away, behind the word mountains, far from the
                            countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <ul class="ftco-social mt-3">
                            <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <section class="ftco-section" id="blogs-list">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row m-5" v-if="isLoading"><b>Loading...</b></div>
                        <div class="row m-5" v-else-if="error">Something bad happened</div>
                        <div class="row" v-else-if="posts && posts.length > 0">
                            <div class="col-md-6" v-for="(post, index) in posts" :key="index">
                                <div class="blog-entry ftco-animate">
                                    <router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs_graphcms' } }"
                                    class="img img-2" :style="$func.ext_BgImage(post.photo)" />
                                    <div class="text text-2 pt-2 mt-3">
                                        <span class="category mb-3 d-block"><a href="#">Technology</a></span>
                                        <h3 class="mb-4"><router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs_graphcms' } }">{{post.title}}</router-link></h3>
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
                                                <p><router-link :to="{ name: 'blog', params: { id: post.id, type: 'blogs_graphcms' } }" class="btn py-2">Continue Reading <span class="ion-ios-arrow-forward"></span></router-link></p>
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
                                <div class="block-27">
                                    <a href="#" @click.prevent="loadPrev" v-hide="page_index <= 1" class="btn btn-primary p-2 px-xl-3 py-xl-2">Prev page</a>
                                    <a href="#" @click.prevent="loadNext" v-hide="page_index > 1 && (!posts || posts.length === 0)" class="btn btn-primary p-2 px-xl-3 py-xl-2 ml-2">Next page</a>
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
  name: 'ListPost3',
  components: {
      Rightbar
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
        this.$store.dispatch(actionTypes.getPosts, { is_GraphCMS: this.is_GraphCMS, page_index: this.page_index });
    },
    setPostId(id) {
        this.postId = id;
    },
    loadNext() {
        scrollTop('#blogs-list');
        this.page_index += 1;
    },
    loadPrev() {
        if (this.page_index > 1) {
        scrollTop('#blogs-list');
            this.page_index -= 1;
        }
    },
  },
};
</script>
