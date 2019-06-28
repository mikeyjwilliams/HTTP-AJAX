import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const Friends = props => {
  return (
    <Card className={` mdc-card`}>
      <CardContent>
        <div className="friends-row">
          <div className="center-vert">
            <Typography component="h3" variant="h4" className="center-vert">
              {props.friend.name}
            </Typography>
          </div>
          <div className="">
            <Typography component="h4" variant="h5">
              {props.friend.age}
            </Typography>
            <Typography component="h4" variant="h5">
              {props.friend.email}
            </Typography>
            <button type="button" onClick={props.saveFriend}>
              Save
            </button>
            <button type="button">X</button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Friends.propTypes = {
//   friend: PropTypes.shape({
//     name: PropTypes.string,
//     age: PropTypes.number,
//     email: PropTypes.string
//   })
// };
export default Friends;
