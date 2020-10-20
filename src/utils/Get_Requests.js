import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://matts-nc-news-api.herokuapp.com/api'
})

// On Topics Page, used to collect all the topics for listing them
export const getAllTopics = () => {
  return instance
    .get('/topics')
}