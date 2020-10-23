//
import React from 'react';
//utils
import { patchVotes } from '../utils/Patch_Requests.js'

export const Votes = ({ votes, query }) => {
  // Increment the votes on the API side using a patch request 
  const handleVote = (voteValue) => {
    patchVotes(query, voteValue).then(() => {
      console.log('Work on this!')
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