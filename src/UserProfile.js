import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    let storiesMessage;
    if (this.props.userProfile.numOfStories > 0) {
      storiesMessage = 'Number of stories submitted: ' + this.props.userProfile.numOfStories;
    } else {
      storiesMessage = 'No stories submitted yet'
    }
    return (
      <div className="UserProfile">
        <p>Username: {this.props.userProfile.username}</p>
        <p>Created Date: {this.props.userProfile.createdDate}</p>
        <p>Description: {this.props.userProfile.description}</p>
        <p>{storiesMessage}</p>
      </div>
    );
  }
}

export default UserProfile;
