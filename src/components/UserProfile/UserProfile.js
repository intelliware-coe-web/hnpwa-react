import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    let storiesMessage;
    if (this.props.userProfile.numOfStories > 0) {
      storiesMessage = 'Number of stories submitted: ' + this.props.userProfile.numOfStories;
    } else {
      storiesMessage = 'No stories submitted yet'
    }

    let avatar = this.props.userProfile.avatar;
    let avatarDivContent;
    if (avatar) {
      var imgSrc = require('../../avatars/cat-avatars-' + avatar +  '.jpg');
      avatarDivContent = <img alt="Avatar" src={imgSrc} width="100px"></img>
    } else {
      avatarDivContent = <button onClick={this.props.makeCat}>Make Cat</button>
    }

    return (
      <div className="UserProfile">
        <div className="avatar">
          {avatarDivContent}
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
