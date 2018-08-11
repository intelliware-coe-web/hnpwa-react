import React from 'react';

function NewsListItem(props) {
    return (
      <div className="news-list-item">
        <button className="btn btn--link title" onClick={() => props.selectNewsItem(props.item)}>{props.item.title}</button>
        <div className="info">
          {props.item.points} points by {props.item.author} | {props.item.timeAgo} ago | {props.item.numberOfComments} comments
        </div>
      </div>
    );
  }

  export default NewsListItem;