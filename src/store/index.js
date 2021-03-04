import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import post from '@/store/modules/post';
import posts from '@/store/modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    posts,
    post,
  },
});
