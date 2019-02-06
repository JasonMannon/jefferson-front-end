import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import UserListItem from './UserListItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center'
  },
  inline: {
    display: 'inline',
  },
});

class UserList extends Component {
  render() {
    const { addSelectedUser, classes, disableButtons, users } = this.props

    return (
      <div>
        <List className={classes.root}>
          { users.map(user => {
              return (
                <UserListItem
                  addSelectedUser={addSelectedUser}
                  disableButtons={disableButtons}
                  key={user.id}
                  user={user}
                />
              )
            })
          }
        </List>
      </div>
    );
  };
};

export default withStyles(styles)(UserList);
