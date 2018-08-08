import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            React Boilerplate
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
  }

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CustomAppBar = withStyles(styles)(SimpleAppBar);

class StartPage extends Component {
  render() {
    return (
      <div>
        <CustomAppBar />
        Hello, This project is a boilerplate for React 16.3 with ES6 + Optional Chaining and Custom colorset bootstrap and material-ui!
        <br />
        <b>Maintainer: Yundo Han (han@yun.do)</b>
      </div>
    )
  }
}

export default withRouter(StartPage);
