<template>
    <main>
        <section class="cta-section theme-bg-light py-5">
            <div class="container text-center">
                <h2 class="heading">DevBlog - A Blog Template Made For Developers</h2>
                <div class="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
                <form class="signup-form form-inline justify-content-center pt-3">
                    <div class="form-group">
                        <label class="sr-only" for="semail">Your email</label>
                        <input type="email" id="semail" name="semail1" class="form-control mr-md-1 semail" placeholder="Enter email">
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Subscribe</button>
                </form>
            </div><!--//container-->
        </section>

        <section class="blog-list px-3 py-5 p-md-5">
            <ListPost :is_GraphCMS="is_GraphCMS"></ListPost>
        </section>
    </main>
</template>

<script>
import ListPost from '@/components/ListPost.vue';
export default {
  name: 'Home',
  components: {
    ListPost,
  },
  data() {
    return {
      is_GraphCMS: true
    };
  },
  methods: {
    onSubmit() {
    }
  }
};
</script>
