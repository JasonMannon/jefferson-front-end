import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    backgroundColor: 'white',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SortUsersFilter extends Component {
  constructor (props) {
    super()

    this.state = {
      selectedValue: ''
    };
  };

  handleOnChange = (event) => {
    const { sortUsers } = this.props

    sortUsers(event.target.value);

    this.setState({selectedValue: event.target.value});
  }

  render() {
    const { classes } = this.props
    const { selectedValue } = this.state

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel>Sort</InputLabel>
          <Select value={selectedValue} onChange={this.handleOnChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value='first' name='First Name'>First Name</MenuItem>
            <MenuItem value='last' name='Last Name'>Last Name</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  };
};

export default withStyles(styles)(SortUsersFilter);
