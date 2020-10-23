import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://matts-nc-news-api.herokuapp.com/api'
})

export const deleteBadComment = (comment_id) => {
  return instance.delete(`https://matts-nc-news-api.herokuapp.com/api/comments/${comment_id}`)
}