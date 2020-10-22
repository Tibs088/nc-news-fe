import React from 'react'
import { getIndivdualUser } from '../utils/Get_Requests.js'

class ProfilePage extends React.Component {
  state = {
    user: {},
    isLoading: true
  }

  componentDidMount() {
    console.log(this.props)
    getIndivdualUser(this.props.username).then(({ data: user }) => {
      this.setState({ user, isLoading: false })
    })
  }


  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <p>Is Loading...</p>
      )
    } else {
      return (
        <div>
          <h2>Hello</h2>
        </div>
      )
    }
  }
}

export default ProfilePage;