import React from 'react';

function NewsListItem(props) {
    return (
      <div className="news-list-item">
        <a className="title" href={props.item.url} target="__blank">{props.item.title}</a>
        <div className="info">
          {props.item.points} points by {props.item.user} | {props.item.timeAgo} ago | {props.item.numberOfComments} comments
        </div>
      </div>
    );
  }

  export default NewsListItem;