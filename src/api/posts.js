import axios from '@/api/axios';
const API_URL_GRAPHCMS = process.env.VUE_APP_API_URL_GRAPHCMS;
const API_URL = process.env.VUE_APP_API_URL;

var queryList = `
query Get_Posts($page_index: Int, $page_size: Int) {
    posts_paging_info(page_index: $page_index, page_size: $page_size) {
        data {
          id, title, summary, photo, comments{id}, createdAt, updatedAt, status, user { id, email, name }
        }, current_page, last_page, total
    }
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
  getPost(id: $id) { id, title, summary, content, photo, comments{ id, comment, user {name} }, createdAt, updatedAt, status, user { id, email, name }}
}
`;

var queryDetailGraphCMS = `
query Get_Post($id: ID!) {
  post(where: {id: $id}) {
    id,photo,title,summary,content {text}, comments { comment, author {name} }
    updatedAt,createdAt
    author {id,name,email}
  }
}
`;

var default_page_size = 3;
var GraphCMS_page_size = 4;
const getPosts = async (is_GraphCMS, page_index, page_size) => {
    if (is_GraphCMS) {
        page_index = page_index || 1;
        if (page_index < 1)
            page_index = 1;
        var skip = (page_index - 1) * GraphCMS_page_size;
        return await axios.post(API_URL_GRAPHCMS, { query: queryListGraphCMS, variables: { 'first': GraphCMS_page_size, skip } });
    }
    else
        return await axios.post(API_URL, { query: queryList, variables: { page_index: (page_index || 1), page_size: (page_size || default_page_size) } });
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
