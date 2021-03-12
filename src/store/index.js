import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import post from '@/store/modules/post';
import posts from '@/store/modules/posts';
import static_data from '@/store/modules/static_data';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    posts,
    post,
    static_data
  },
});
