import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    let storiesMessage;
    if (this.props.numOfStories > 0) {
      storiesMessage = 'Number of stories submitted: ' + this.props.numOfStories;
    } else {
      storiesMessage = 'No stories submitted yet'
    }

    return (
      <div className="UserProfile">
        <p>Username: {this.props.username}</p>
        <p>Created Date: {this.props.createdDate}</p>
        <p>Description: {this.props.description}</p>
        <p>{storiesMessage}</p>
      </div>
    );
  }
}

export default UserProfile;
