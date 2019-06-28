import React from 'react';
import Friends from './Friends';

export default function FriendsList(props) {
  return (
    <div>
      {props.friends.length > 0 ? (
        props.friends.map(friend => {
          return (
            <Friends key={friend.id} friend={friend} addItem={props.addItem} />
          );
        })
      ) : (
        <h2>Loading data....</h2>
      )}
    </div>
  );
}
