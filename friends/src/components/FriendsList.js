import React from 'react';
import Friend from './Friend';

export default function FriendsList(props) {
  return (
    <div>
      <h2 className="text-center">Friends List</h2>
      {props.friends.length > 0 ? (
        props.friends.map(friend => {
          return (
            <Friend
              key={friend.id}
              friend={friend}
              deleteFriend={props.deleteFriend}
            />
          );
        })
      ) : (
        <h2>Loading Data...</h2>
      )}
    </div>
  );
}
