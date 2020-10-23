//React Stuff
import React from 'react';
import { Link } from '@reach/router';
//Material UI For the Cards
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
//Components 
import { Votes } from './Votes_Comp';
//styles
import '../styles/Cards_Style.css'
//Utils
import { deleteBadComment } from '../utils/Delete_Requests'

//Styles for material-ui
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Comments = (props) => {
  const classes = useStyles();

  const handleDelete = (comment_id) => {
    deleteBadComment(comment_id).then((res) => {
      console.log(res);
    })
  }

  return (
    <div id='card-container'>
      {/* Map over the comments and return a card with various data from those comments */}
      {props.comments.map(comment => {
        return (
          // Top level of card, the viusal holder for the comments individually
          <Card key={comment.comment_id} className={classes.root} id='comment'>
            {/* Card Header holds the details about the user who wrote the comment and when they commented */}
            <Link to={`/user/${comment.author}`}>
              <CardHeader
                avatar={
                  <Avatar aria-label="user" className={classes.avatar} />}
                title={comment.author}
                subheader={comment.created_at}
              />
            </Link>
            {/* Card content holds the comments body as well as the voting component */}
            <CardContent>
              <p>{comment.body}</p>
              <Votes votes={comment.votes} query={`comments/${comment.comment_id}`} />
              <button onClick={() => handleDelete(comment.comment_id)}>
                Delete Comment
              </button>
            </CardContent>

          </Card>
        )
      })}
    </div>
  )
}
