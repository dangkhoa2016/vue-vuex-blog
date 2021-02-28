import postsApi from '@/api/posts';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getPostsStart: '[posts] Start get data',
  getPostsSuccess: '[posts] Get data success',
  getPostsFailure: '[posts] Get data failure',
};

export const actionTypes = {
  getPosts: '[posts] Get posts',
};

const mutations = {
  [mutationTypes.getPostsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getPostsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPostsFailure](state) {
    state.isLoading = false;
  },
};

const actions = {
  [actionTypes.getPosts](context, {is_GraphCMS, page_index}) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPostsStart);
      postsApi
        .getPosts(is_GraphCMS, page_index)
        .then((response) => {
          context.commit(mutationTypes.getPostsSuccess, response.data.data.posts);
          resolve(response.data.data.posts);
        })
        .catch(() => {
          context.commit(mutationTypes.getPostsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
