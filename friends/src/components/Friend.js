import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const edit = <FontAwesomeIcon icon={faEdit} size="2x" />;

export default function Friend(props) {
  // const friends = props.friend[0];
  // const findFriend = friends.filter(
  //   friend => friend.id === props.params.match.id
  // );
  console.log('findFriend ', props.friend);

  return (
    <section className="info-section">
      <div className="vert-center">
        <h3>{props.friend.name}</h3>
      </div>
      <div className="friend-info-section">
        <p className="friend-age">{props.friend.age}</p>
        <p className="friend-email">{props.friend.email}</p>
      </div>
      <div className="update-section">
        <Link
          to={`/create/`}
          onClick={props.editFriend}
          className="update-left"
        >
          {edit}
        </Link>
      </div>
    </section>
  );
}
