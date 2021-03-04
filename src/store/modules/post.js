import postsApi from '@/api/posts';

const state = {
    data: null,
    isLoading: false,
    error: null,
    caches: {}
};

export const mutationTypes = {
    getPostStart: '[post] Start get data',
    getPostSuccess: '[post] Get data success',
    getPostFailure: '[post] Get data failure',
    saveCachePost: '[post] Save cache'
};

export const actionTypes = {
    getPost: '[post] Get post',
};

const mutations = {
    [mutationTypes.getPostStart](state) {
        state.isLoading = true;
        state.data = null;
    },
    [mutationTypes.getPostSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    [mutationTypes.getPostFailure](state) {
        state.isLoading = false;
    },
    [mutationTypes.saveCachePost](state, payload) {
        state.caches[payload.id] = payload;
    }
};

const actions = {
    [actionTypes.getPost](context, { is_GraphCMS, id }) {
        return new Promise((resolve) => {
            var post = context.state.caches[id];
            if (post) {
                context.commit(mutationTypes.getPostSuccess, post);
                return resolve(post);
            }

            context.commit(mutationTypes.getPostStart);
            postsApi
                .getPost(is_GraphCMS, id)
                .then((response) => {
                    var post = null;
                    if (is_GraphCMS)
                        post = response.data.data && response.data.data.post;
                    else
                        post = response.data.data && response.data.data.getPost;

                    context.commit(mutationTypes.getPostSuccess, post);
                    context.commit(mutationTypes.saveCachePost, post);
                    resolve(post);
                })
                .catch(() => {
                    context.commit(mutationTypes.getPostFailure);
                });
        });
    },
};

export default {
    state,
    actions,
    mutations,
};
