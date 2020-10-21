import React from 'react';
import { getAllTopics } from '../utils/Get_Requests';

//styles
import '../styles/Cards_Style.css'
import TopicsCard from '../components/Topics_Card_Comp';


class TopicsPage extends React.Component {
  state = {
    topics: [],
    isLoading: true,
  }

  componentDidMount() {
    getAllTopics().then(({ data: { topics } }) => {
      this.setState({ topics, isLoading: false })
    })
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) {
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <div id='card-container'>
          {topics.map(topic => {
            return (
              <TopicsCard topics={topic} key={topic.slug} />
            )
          })}
        </div>
      )
    }
  }
}

export default TopicsPage;