import postsApi from '@/api/posts';

const state = {
    data: {},
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
        state.data = {};
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
    [actionTypes.getPosts](context, { is_GraphCMS, page_index, page_size }) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.getPostsStart);
            postsApi
                .getPosts(is_GraphCMS, page_index, page_size)
                .then((response) => {
                    var result = [];
                    if (is_GraphCMS)
                        result = response.data.data.posts;
                    else
                        result = response.data.data.posts_paging_info;
                    context.commit(mutationTypes.getPostsSuccess, result);
                    resolve(result);
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
