import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://matts-nc-news-api.herokuapp.com/api'
})

//Patch the votes on anything
export const patchVotes = (query, voteValue) => {
  return instance.patch(`https://matts-nc-news-api.herokuapp.com/api/${query}`, { inc_votes: voteValue })
}