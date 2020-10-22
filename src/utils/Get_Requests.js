import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://matts-nc-news-api.herokuapp.com/api'
})

// On Topics Page, used to collect all the topics for listing them
export const getAllTopics = () => {
  return instance
    .get('/topics')
}

// The base get request for going to the standard articles page
export const getArticles = (query) => {
  if (!query) {
    return instance.get('/articles')
  } else {
    return instance.get(`/articles?topic=${query}`)
  }
}

//Get individual articles based on their id
export const getArticleById = (id) => {
  return instance.get(`/articles/${id}`)
}

export const getIndivdualUser = (username) => {
  return instance.get(`/users/${username}`)
}

export const getUsersArticles = (username) => {
  return instance.get(`/articles?authro=${username}`)
}

export const getCommentsOnArticle = (article_id) => {
  return instance.get(`/articles/${article_id}/comments`)
}