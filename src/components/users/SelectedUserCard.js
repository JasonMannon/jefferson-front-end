import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140,
  },
  CardActions: {
    justifyContent: 'center'
  }
});

class SelectedUserCard extends Component {
  handleOnClick = () => {
    const { addToUserList, user } = this.props

    addToUserList(user);
  }

  render() {
    const { classes, user } = this.props

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={user.image}
          />
          <CardContent>
            <Typography gutterBottom component="h2" variant="h5">
              {`${user.first} ${user.last}`}
            </Typography>
            <Typography component="p">
              {`${user.email}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions classes={{root: classes.CardActions}}>
          <Button
            className={classes.button}
            color="primary"
            onClick={this.handleOnClick}
            variant="contained"
          >
            Add To User List
          </Button>
        </CardActions>
      </Card>
    );
  };
};

export default withStyles(styles)(SelectedUserCard);
