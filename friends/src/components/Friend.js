import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const edit = <FontAwesomeIcon icon={faEdit} size="2x" />;
const trash = <FontAwesomeIcon icon={faTrashAlt} size="2x" />;

export default function Friend(props) {
  const id = props.friend.id;

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
          to={`/friend/${id}`}
          onClick={props.editFriend}
          className="update-left"
        >
          {edit}
        </Link>
        <Link to={`/`} onClick={props.deleteFriend} className="update-left">
          {trash}
        </Link>
      </div>
    </section>
  );
}
