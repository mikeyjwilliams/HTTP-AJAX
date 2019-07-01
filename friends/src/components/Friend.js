import React from 'react';

export default function Friend(props) {
  console.log('Friend ', props.friend);
  return (
    <div className="info-section">
      <h3>{props.friend.name}</h3>
      <div className="friend-info-section">
        <p className="friend-age">{props.friend.age}</p>
        <p className="friend-email">{props.friend.email}</p>
      </div>
    </div>
  );
}
