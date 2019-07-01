import React from 'react';
import Friend from './Friend';

export default function FriendsList(props) {
  console.log('Friend data', props.friends);
  return (
    <div>
      {props.friends.length > 0 ? (
        props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })
      ) : (
        <h2>Loading Data...</h2>
      )}
    </div>
  );
}
