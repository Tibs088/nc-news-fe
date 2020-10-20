import React from 'react';
import { getArticleById } from '../utils/Get_Requests'

class ArticlePage extends React.Component {
  state = {
    article: {},
    isLoading: true,
  }

  componentDidMount() {
    getArticleById(6).then(({ data: article }) => {
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
        <h2>{article.title}</h2>
      )
    }
  }
}

export default ArticlePage;