import React, { Component } from 'react';
import avatar from './avatars/cat-avatars.jpg';

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
        <div className="avatar">
          <img src={avatar} width="100px"/>
          <button onClick={this.props.makeCat}>Make Cat</button>
        </div>
        <div>
          <p>Username: {this.props.userProfile.username}</p>
          <p>Created Date: {this.props.userProfile.createdDate}</p>
          <p>Description: {this.props.userProfile.description}</p>
          <p>{storiesMessage}</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
