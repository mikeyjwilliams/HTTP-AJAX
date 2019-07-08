import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const edit = <FontAwesomeIcon icon={faEdit} size="2x" />;
const trash = <FontAwesomeIcon icon={faTrashAlt} size="2x" />;

export default function Friend(props) {
  const deleteFriend = props => {
    console.log(props.loseFriend);
    // const findFriend = props.loseFriend.find(
    //   friend => friend.id === Number(props.loseFriend.match.params.id)
    // );
    // if (findFriend === undefined) {
    //   console.log(undefined);
    // } else {
    //   // const { name, age, email } = findFriend;
    //   // this.setState({ name, age, email });
    //   // console.log('FRIEND', this.state.friend);
    //   console.log('FRIEND ID ', findFriend);
    // }
    // // console.log(this.state.friends.id);
    // console.log('friend id ', props.friend.id);
  };
  const friendsArr = props.loseFriend[0];

  const id = props.friend.id;
  console.log(friendsArr);
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
        <Link to={`/`} onClick={deleteFriend} className="update-left">
          {trash}
        </Link>
      </div>
    </section>
  );
}
