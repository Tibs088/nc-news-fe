import React from 'react';
import axios from 'axios';

export const Votes = ({ votes, article_id }) => {
  const handleVote = (voteValue) => {
    axios.patch(`https://matts-nc-news-api.herokuapp.com/api/articles/${article_id}`, { inc_votes: voteValue }).then(() => {
      votes++;
    });
  }

  return (
    <div>
      <button onClick={() => handleVote(1)}>Vote Up</button>
      <p>{votes}</p>
      <button onClick={() => handleVote(-1)}>Vote Down</button>
    </div>
  )
}