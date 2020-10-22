import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '500px',
    },
  },
}));

export const CommentField = () => {
  const classes = useStyles();

  const postComment = (comment) => {

  }

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={10}
          defaultValue="Default Value"
          variant="outlined"
        />
        <button onClick={() => postComment()}>Post</button>
      </div>
    </form>
  )
}