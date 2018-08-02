import React from 'react';

function NewsListItem(props) {
    return (
      <div className="news-list-item">
        <a className="title" href="#" onClick={() => props.selectNews(props.item)}>{props.item.title}</a>
        <div className="info">
          {props.item.points} points by {props.item.author} | {props.item.timeAgo} ago | {props.item.numberOfComments} comments
        </div>
      </div>
    );
  }

  export default NewsListItem;