<template>
    <div class="col-lg-4 sidebar ftco-animate">
        <div class="sidebar-box">
            <form action="#" class="search-form" @submit.prevent="doNothing">
                <div class="form-group">
                    <span class="icon icon-search"></span>
                    <input type="text" class="form-control" placeholder="Type a keyword and hit enter">
                </div>
            </form>
        </div>
        
        <div class="sidebar-box ftco-animate">
            <h3 class="sidebar-heading">Categories</h3>
            <ul class="categories">
                <li v-for="(item, index) in categories" :key="index"><a href="#">{{item.name}} <span>({{item.count}})</span></a></li>
            </ul>
        </div>

        <div class="sidebar-box ftco-animate">
            <h3 class="sidebar-heading">Tag Cloud</h3>
            <ul class="tagcloud">
                <a href="#" class="tag-cloud-link" v-for="(item, index) in tags" :key="index">{{item.keyword}}</a>
            </ul>
        </div>

        <div class="sidebar-box subs-wrap img" :style="$func.ext_BgImage('/images/bg_1.jpg')">
            <div class="overlay"></div>
            <h3 class="mb-4 sidebar-heading">Newsletter</h3>
            <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia
            </p>
            <form action="#" class="subscribe-form" @submit.prevent="doNothing">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email Address">
                    <input type="submit" value="Subscribe" class="mt-2 btn btn-white submit">
                </div>
            </form>
        </div>

        <div class="sidebar-box ftco-animate">
            <h3 class="sidebar-heading">Archives</h3>
            <ul class="categories">
                <li v-for="(item, index) in archives" :key="index"><a href="#">{{item.month}} <span>({{item.count}})</span></a></li>
            </ul>
        </div>

        <div class="sidebar-box ftco-animate">
            <h3 class="sidebar-heading">Paragraph</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                necessitatibus voluptate quod mollitia delectus aut.</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { contentWayPoint } from '../helpers/ui';

export default {
  name: 'Rightbar',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
        categories: state => state.static_data.categories,
        archives: state => state.static_data.archives,
        tags: state => state.static_data.tags,
    }),
  },
  mounted() {
      contentWayPoint();
  },
  methods: {
      doNothing() {}
  },
};
</script>
