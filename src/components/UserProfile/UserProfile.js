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

    let createdDate = new Date(this.props.userProfile.createdDate * 1000);
    let dateString = createdDate.getUTCFullYear() + "-" +
                    ("0" + (createdDate.getUTCMonth()+1)).slice(-2) + "-" +
                    ("0" + createdDate.getUTCDate()).slice(-2) + " " +
                    ("0" + createdDate.getUTCHours()).slice(-2) + ":" +
                    ("0" + createdDate.getUTCMinutes()).slice(-2) + ":" +
                    ("0" + createdDate.getUTCSeconds()).slice(-2);

    return (
      <div className="UserProfile">
        <div className="avatar">
          {avatarDivContent}
        </div>
        <div>
          <p>Username: {this.props.userProfile.username}</p>
          <p>Created Date: {dateString}</p>
          <p>Description: {this.props.userProfile.description}</p>
          <p>{storiesMessage}</p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
