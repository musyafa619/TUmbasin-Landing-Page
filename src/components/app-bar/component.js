import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position='static'>
          <Toolbar>
            <Typography variant='h5' className={classes.title}>
              <strong>tumbas.in</strong>
            </Typography>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>Keuntungan</Button>
            <Button color='inherit'>Blog</Button>
            <Button color='inherit'>Testimoni</Button>
            <Button color='inherit'>Download</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Component;
