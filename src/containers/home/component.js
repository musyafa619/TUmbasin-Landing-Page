import React from 'react';
import Appbar from '../../components/app-bar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Component extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Container fixed>
          <Appbar />
        </Container>
      </div>
    );
  }
}
export default Component;
