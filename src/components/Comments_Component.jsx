import React from 'react';

export const Comments = (props) => {

  return (
    <div>
      <ul>
        {props.comments.map(comment => {
          return <li key={comment.comment_id}>
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <p>{comment.votes}</p>
            <p>{comment.created_at}</p>
          </li>
        })}
      </ul>
    </div>
  )
}


//   < ol >
// {
//   comments.map(comment => {
//     return <li key={comment.comment_id}>{comment.body}</li>
//   })
// }
//           </ol >