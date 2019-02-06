import React, { Component } from 'react';
import { users } from './utils/users';
import './App.css';
import UserList from './components/users/UserList';
import SelectedUserCard from './components/users/SelectedUserCard';
import removeFromArray from './utils/removeFromArray';
import Grid from '@material-ui/core/Grid';
import SortUsersFilter from './components/users/SortUsersFilter';
import orderBy from 'lodash/orderBy';

class App extends Component {
  constructor (props) {
    super()

    this.state = {
      selectedUser: null,
      userList: users
    };
  };

  handleAddSelectedUser = (user) => {
    const { userList } = this.state

    this.setState({
      selectedUser: user,
      userList: removeFromArray(userList, user)
    });
  };

  handleAddToUserList = (user) => {
    const { userList } = this.state
    userList.unshift(user);

    this.setState({
      selectedUser: null,
      userList: userList
    });
  };

  handleSortUsers = (sortColumn) => {
    const { userList } = this.state

    this.setState({
      userList: orderBy(userList, sortColumn, 'asc')
    });
  };

  render() {
    const { selectedUser, userList } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1>Jefferson Coding Challenge</h1>
          <Grid container spacing={24}>
            <Grid item sm={2}/>
            <Grid item sm={4}>
              <h4>User List</h4>
              <SortUsersFilter handleSortUsers={this.sortUsers}/>
              <UserList
                handleAddSelectedUser={this.addSelectedUser}
                disableButtons={selectedUser !== null}
                users={userList}
              />
            </Grid>
            <Grid item sm={4}>
              <h4>Selected User</h4>
              { selectedUser ?
                  <SelectedUserCard
                    handleAddToUserList={this.addToUserList}
                    user={selectedUser}
                  /> : ''
              }
            </Grid>
            <Grid item sm={2}/>
          </Grid>
        </header>
      </div>
    );
  };
};

export default App;
