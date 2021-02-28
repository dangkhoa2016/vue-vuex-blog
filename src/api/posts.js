import axios from '@/api/axios';
const API_URL_GRAPHCMS = process.env.VUE_APP_API_URL_GRAPHCMS;
const API_URL = process.env.VUE_APP_API_URL;

var queryList = `
query Get_Posts($page_index: Int) {
  posts(page_index: $page_index) { id, title, summary, photo, comments{id}, createdAt, updatedAt, status, user { id, email, name }}
}
`;

var queryListGraphCMS = `
query Get_Posts($first: Int, $skip: Int) {
  posts(first: $first, skip: $skip, where: {state: "active"}) {
    id,photo,title,summary,comments{id}
    updatedAt,createdAt
    author {id,name,email}
  }
}
`;


var queryDetail = `
query Get_Post($id: ID!) {
  getPost(id: $id) { id, title, summary, content, photo, comments{id}, createdAt, updatedAt, status, user { id, email, name }}
}
`;

var queryDetailGraphCMS = `
query Get_Post($id: ID!) {
  post(where: {id: $id}) {
    id,photo,title,summary,content{text},comments{id}
    updatedAt,createdAt
    author {id,name,email}
  }
}
`;

var page_size_GraphCMS = 5;
const getPosts = async (is_GraphCMS, page_index) => {
    if (is_GraphCMS) {
        page_index = page_index || 1;
        if (page_index < 1)
            page_index = 1;
        var skip = (page_index - 1) * page_size_GraphCMS;
        return await axios.post(API_URL_GRAPHCMS, { query: queryListGraphCMS, variables: { 'first': page_size_GraphCMS, skip } });
    }
    else
        return await axios.post(API_URL, { query: queryList, variables: { page_index: (page_index || 1) } });
};

const getPost = async (is_GraphCMS, id) => {
    if (is_GraphCMS)
        return await axios.post(API_URL_GRAPHCMS, { query: queryDetailGraphCMS, variables: { id } });
    else
        return await axios.post(API_URL, { query: queryDetail, variables: { id } });
};

export default {
    getPosts,
    getPost,
};
