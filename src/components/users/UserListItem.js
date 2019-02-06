import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
});

class UserListItem extends Component {
  handleOnClick = () => {
    const { addSelectedUser, user } = this.props

    addSelectedUser(user);
  };

  render() {
    const { classes, disableButtons, user } = this.props

    return (
      <ListItem divider={true} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt='user image' src={user.image} />
        </ListItemAvatar>
        <ListItemText
          primary={`${user.first} ${user.last}`}
          secondary={`${user.email}`}
        />
        <ListItemSecondaryAction>
          <Fab
            aria-label="extended"
            className={classes.fab}
            color="primary"
            disabled={disableButtons}
            onClick={() => this.handleOnClick()}
            size='small'
          >
            <AddIcon />
          </Fab>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };
};

export default withStyles(styles)(UserListItem);
