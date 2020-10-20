import React from 'react';
import { getArticleById } from '../utils/Get_Requests'

class ArticlePage extends React.Component {
  state = {
    article: {},
    isLoading: true,
  }

  componentDidMount() {
    getArticleById(this.props.article_id).then(({ data: article }) => {
      this.setState({ article, isLoading: false })
    })
  }

  render() {
    const { article: { article }, isLoading } = this.state;
    if (isLoading) {
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <div>
          <h2>{article.title}</h2>
          <h3>By {article.author}</h3>
          <p>{article.body}</p>
        </div>
      )
    }
  }
}

export default ArticlePage;