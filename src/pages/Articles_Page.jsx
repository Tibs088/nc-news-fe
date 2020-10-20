import React from 'react';
import ArticlesCard from '../components/Articles_Card_Comp';
import { getArticles } from '../utils/Get_Requests';

class ArticlesPage extends React.Component {
  state = {
    articles: [],
    isLoading: true
  }

  componentDidMount() {

    getArticles(this.props.artby).then(({ data: { articles } }) => {
      this.setState({ articles, isLoading: false })
    })
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <div id='articles-list'>
          {articles.map(article => {
            return (
              <ArticlesCard key={article.article_id} article={article} />
            )
          })}
        </div>
      )
    }
  }
}

export default ArticlesPage;