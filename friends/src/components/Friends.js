import React from 'react';

const Friends = props => {
  return (
    <div className="friends-row">
      <h2 className="center-vert">{props.friend.name}</h2>
      <div>
        <h3>{props.friend.age}</h3>
        <h3>{props.friend.email}</h3>
      </div>
    </div>
  );
};
export default Friends;
