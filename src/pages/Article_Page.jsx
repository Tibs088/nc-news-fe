import React from 'react';
import { Link } from '@reach/router'
import { getArticleById, getCommentsOnArticle } from '../utils/Get_Requests'
import { Comments } from '../components/Comments_Component.jsx'

class ArticlePage extends React.Component {
  state = {
    article: {},
    comments: {},
    isLoading: true
  }

  componentDidMount() {
    Promise.all([getArticleById(this.props.article_id), getCommentsOnArticle(this.props.article_id)]).then(responses => {
      this.setState({ article: responses[0].data.article, comments: responses[1].data.comments, isLoading: false })
    })
  }
  render() {
    const { article, comments, isLoading } = this.state;
    if (isLoading) {
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <div>
          <h2>{article.title}</h2>
          <Link to={`/user/${article.author}`}>
            <h3 author={article.author}>By {article.author}</h3>
          </Link>
          <p>{article.body}</p>
          <Comments comments={comments} />
        </div>
      )
    }
  }


}

export default ArticlePage;