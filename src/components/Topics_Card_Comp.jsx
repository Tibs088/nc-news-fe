import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
});

const imgLinks = {
  coding: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  football: "https://images.theconversation.com/files/341806/original/file-20200615-65942-1hl134r.jpg?ixlib=rb-1.1.0&rect=161%2C41%2C3832%2C2616&q=45&auto=format&w=926&fit=clip",
  cooking: "https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.nbcnews-fp-1200-630.jpg"
}

export default function TopicsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={imgLinks[props.topics.slug]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <h3>{props.topics.slug}</h3>
          <p>{props.topics.description}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  )
}
