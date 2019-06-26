import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import Icon from '@material-ui/core/Icon';
//import CardActions from '@material-ui/core/CardActions';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    mainWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 18
  },
  pos: {
    marginBottom: 12
  }
});

const Friends = props => {
  const jsClasses = useStyles();
  console.log(props.friend);
  return (
    <Card className={`${jsClasses.card} mdc-card`}>
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

Friends.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  })
};
export default Friends;
