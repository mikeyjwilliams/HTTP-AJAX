import React from 'react';

const Friends = props => {
  return (
    <div>
      <h2>{props.friend.name}</h2>
      <h3>{props.friend.age}</h3>
      <h3>{props.friend.email}</h3>
    </div>
  );
};
export default Friends;
