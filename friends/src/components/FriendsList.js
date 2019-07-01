import React from 'react';
import Friend from './Friend';

export default function FriendsList(props) {
  console.log('Friend data', props.friends);
  return (
    <div>
      {props.friends.map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
}
