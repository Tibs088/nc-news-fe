// Core imports for functionality
import React from 'react';
import { Link } from '@reach/router'
//material-ui
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
//styles
import '../styles/Cards_Style.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    maxHeight: 500,
  },
});

//Images for the topics, this wouldn't work with endless topics
const imgLinks = {
  coding: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  football: "https://images.theconversation.com/files/341806/original/file-20200615-65942-1hl134r.jpg?ixlib=rb-1.1.0&rect=161%2C41%2C3832%2C2616&q=45&auto=format&w=926&fit=clip",
  cooking: "https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg"
}

export default function TopicsCard(props) {
  const classes = useStyles();

  return (
    // Outer card for holding everything
    <Card className={classes.root} id='card'>
      {/* Link to the articles lists querying the topic */}
      <Link to={`/articles/${props.topics.slug}`}>
        <CardActionArea>
          {/* A nice picture to show the topic */}
          <CardMedia
            component="img"
            image={imgLinks[props.topics.slug]}
            title="Contemplative Reptile"
          />
          {/* Written discriptions of the topic */}
          <CardContent>
            <h3>{props.topics.slug}</h3>
            <p>{props.topics.description}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Link>
    </Card>
  )
}
