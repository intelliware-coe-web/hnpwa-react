import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Jane Doe',
      createdDate: '2015-06-31',
      description: 'Amazing user',
      numOfStories: 5,
    };
  }

  render() {
    let stories;
    if (this.state.numOfStories > 0) {
      stories = 'Number of stories submitted: ' + this.state.numOfStories;
    } else {
      stories = 'No stories submitted yet'
    }

    return (
      <div className="UserProfile">
        <p>Username: {this.state.username}</p>
        <p>Created Date: {this.state.createdDate}</p>
        <p>Description: {this.state.description}</p>
        <p>{stories}</p>
      </div>
    );
  }
}

export default UserProfile;
