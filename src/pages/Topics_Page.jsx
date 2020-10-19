import React from 'react';
import axios from 'axios';


class TopicsPage extends React.Component {
  state = {
    topics: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get('https://matts-nc-news-api.herokuapp.com/api/topics').then(({ data: { topics } }) => {
      this.setState({ topics, isLoading: false })
    })
  }

  render() {
    let num = 0;
    const { topics, isLoading } = this.state;
    if (isLoading) {
      return (
        <p>Loading..</p>
      )
    } else {
      return (
        <div>
          <h2>Topics</h2>
          <ol className="list-of-topics">
            {topics.map(topic => {
              num++
              return (
                <li key={num}>{topic.slug}</li>
              )
            })}
          </ol>
        </div>
      )
    }
  }
}

export default TopicsPage;