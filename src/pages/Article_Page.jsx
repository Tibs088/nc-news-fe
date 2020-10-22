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
    getArticleById(this.props.article_id).then(({ data: article }) => {
      this.setState({ article })
      getCommentsOnArticle(this.props.article_id).then(({ data: comments }) => {
        this.setState({ comments, isLoading: false })
      })
    })
  }
  render() {
    const { article: { article }, comments: { comments }, isLoading } = this.state;

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