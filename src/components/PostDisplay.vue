<template>
    <article class="blog-post px-md-3 pb-5">
        <div class="container">
            <header class="blog-post-header">
                <h2 class="title mb-2">{{post.title}}</h2>
                <div class="meta mb-3"><span class="date">Published 3 months ago</span><span class="comment"><a href="#">{{post.comments.length}} comments</a></span></div>
            </header>
            
            <div class="blog-post-body">
                <figure class="blog-banner">
                    <a :href="post.photo"><img class="img-fluid" :src="post.photo" :alt="post.title"></a>
                </figure>
                <p>{{post.summary}}</p>
                <div v-html="post.content.text ? post.content.text : post.content"></div>
            </div>
                
            <nav class="blog-nav nav nav-justified my-5">
                <a class="nav-link-prev nav-item nav-link rounded-left" href="#" @click.prevent="callOtherPost(false)">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                <a class="nav-link-next nav-item nav-link rounded-right" href="#" @click.prevent="callOtherPost(true)">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
            </nav>
        </div><!--//container-->
    </article>
</template>

<script>
import "./PostDisplay.css";
export default {
  name: 'PostDisplay',
  props: {
    post: {
        type: Object,
        default: () => ({})
    },
    callOtherPost: {
        type: Function
    }
  },
  mounted() {
  },
};
</script>
