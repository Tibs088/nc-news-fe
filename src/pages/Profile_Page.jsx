import React from 'react'
import ArticlesCard from '../components/Articles_Card_Comp.jsx'
import { getIndivdualUser, getUsersArticles } from '../utils/Get_Requests.js'

class ProfilePage extends React.Component {
  state = {
    user: {},
    isLoading: true,
    articles: []
  }

  componentDidMount() {
    Promise.all([getIndivdualUser(this.props.username), getUsersArticles(this.props.username)]).then((responses) => {
      this.setState({ user: responses[0].data.user, isLoading: false, articles: responses[1].data.articles })
    })
    // getIndivdualUser(this.props.username).then(({ data: user }) => {
    //   this.setState({ user, isLoading: false })
    // })
  }


  render() {
    const { user, isLoading, articles } = this.state;
    if (isLoading) {
      return (
        <p>Is Loading...</p>
      )
    } else {
      return (
        <div>
          <h2>{user.username}</h2>
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

export default ProfilePage;