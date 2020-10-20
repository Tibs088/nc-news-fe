import React from 'react';
import Card from '@material-ui/core/Card';
import { getAllTopics } from '../utils/Get_Requests';

//styles
import '../styles/Cards_Style.css'


class TopicsPage extends React.Component {
  state = {
    topics: [],
    isLoading: true
  }

  componentDidMount() {
    getAllTopics().then(({ data: { topics } }) => {
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
        <div id='card-container'>
          {topics.map(topic => {
            num++
            return (
              <Card key={num} className='card'>
                <h3>{topic.slug}</h3>
              </Card>
            )
          })}
        </div>
      )
    }
  }
}

export default TopicsPage;