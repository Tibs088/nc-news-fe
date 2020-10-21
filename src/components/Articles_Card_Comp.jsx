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
//Styles
import '../styles/Articles_Styles.css'
import { Votes } from './Votes_Comp';


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

export default function ArticlesCard(props) {
  const classes = useStyles();

  return (
    < Card className={classes.root} id='article' >
      <Link to={`/articles/article/${props.article.article_id}`}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar aria-label="user" className={classes.avatar} />}
            title={props.article.title}
            subheader={props.article.created_at}
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <Votes votes={props.article.votes} article_id={props.article.article_id} />
      </CardContent>
    </Card >
  );
}