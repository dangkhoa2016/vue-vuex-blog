<template>
    <div>
        <div class="hero-wrap js-fullheight" :style="$func.ext_BgImage('/images/bg_1.jpg')"
            data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="js-fullheight d-flex justify-content-center align-items-center">
                <div class="col-md-8 text text-center">
                    <div class="desc">
                        <h1 class="mb-4">{{post ? post.title : 'Blog Details'}}</h1>
                        <p>
                            <router-link :to="{ name: 'home' }" class="btn-custom mr-2" exact>Home <span class="ion-ios-arrow-forward"></span></router-link>
                            <router-link :to="{ name: type }" class="btn-custom mr-2" exact>Blog <span class="ion-ios-arrow-forward"></span></router-link>
                            <span class="btn-custom">Post detail <span class="ion-ios-arrow-forward"></span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <section class="ftco-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8" v-if="isLoading"><b>Loading...</b></div>
                    <div class="col-lg-8 ftco-animate" v-else-if="error">Something bad happed</div>
                    <div class="col-lg-8 ftco-animate post-body" v-else-if="post">
                        
                        <div>{{ post.summary }}</div>
                        <div v-html="post.content.text ? post.content.text : post.content"></div>

                        <div class="tag-widget post-tag-container mb-5 mt-5">
                            <div class="tagcloud">
                                <a href="#" class="tag-cloud-link">Life</a>
                                <a href="#" class="tag-cloud-link">Sport</a>
                                <a href="#" class="tag-cloud-link">Tech</a>
                                <a href="#" class="tag-cloud-link">Travel</a>
                            </div>
                        </div>

                        <div class="about-author d-flex p-4 bg-light">
                            <div class="bio mr-5">
                                <img src="/images/person_1.jpg" alt="Image placeholder" class="img-fluid mb-4">
                            </div>
                            <div class="desc">
                                <h3>{{post.user ? post.user.name : post.author.name}}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                                    necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                                    sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>

                        <div class="pt-5 mt-5">
                            <h3 class="mb-5 font-weight-bold">{{post.comments.length}} Comments</h3>
                            <ul class="comment-list">
                                <li class="comment" v-for="(comment, index) in post.comments" :key="index">
                                    <div class="vcard bio">
                                        <img src="/images/person_1.jpg" alt="Image placeholder">
                                    </div>
                                    <div class="comment-body">
                                        <h3>{{comment.user && comment.user.name}}</h3>
                                        <div class="meta">{{comment.createdAt | formatDate('llll')}}</div>
                                        <p>{{comment.comment}}</p>
                                        <p><a href="#" class="reply" @click.prevent="handleReply">Reply</a></p>
                                    </div>
                                </li>

                            </ul>
                            <!-- END comment-list -->

                            <CommentForm />
                        </div>
                    </div>
                    <div class="col-lg-8 ftco-animate" v-else>
                        <b>Post not found.</b>
                    </div>

                    <Rightbar />
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import { mapState } from 'vuex';
import { actionTypes } from '@/store/modules/post';
import CommentForm from '@/components/CommentForm.vue';
import Rightbar from '@/components/Rightbar.vue';
import { fullHeight, contentWayPoint } from '../helpers/ui';
import "./PostDetail.css";

export default {
  name: 'PostDetail',
  data() {
    return {
      type: this.$route.params.type
    };
  },
  components: {
    CommentForm,
    Rightbar
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.post.isLoading,
      post: (state) => state.post.data,
      error: (state) => state.post.error,
    }),
    is_GraphCMS() {
        var id = this.$route.params.id;
        return /^\d+$/.test(id) === false;
    }
  },
  mounted() {
    fullHeight();

    var id = this.$route.params.id;
    if (id)
        this.$store.dispatch(actionTypes.getPost, { is_GraphCMS: this.is_GraphCMS, id });
  },
  methods: {
      show() {
        this.$nextTick(() => {
            contentWayPoint();
        });
      },
      handleReply() {
      }
  },
  watch: {
      post(newPost) {
        const DEFAULT_TITLE = this.$title;
        document.title = newPost && newPost.title ? `${newPost.title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
        this.show();
      },
      error(newError) {
        if (newError) {
            this.show();
        }
      }
  },
};
</script>
