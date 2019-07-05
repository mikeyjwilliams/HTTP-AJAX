import React from 'react';
import './Friend.css';

export default function Friend(props) {
  return (
    <div className="info-section">
      <div className="vert-center">
        <h3>{props.friend.name}</h3>
      </div>
      <div className="friend-info-section">
        <p className="friend-age">{props.friend.age}</p>
        <p className="friend-email">{props.friend.email}</p>
      </div>
    </div>
  );
}
