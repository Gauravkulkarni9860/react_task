import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Result(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div">
            Result = {props.score}
        </Typography>
      </Container>
    </React.Fragment>
  );
}