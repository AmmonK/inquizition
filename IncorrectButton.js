import React from 'react';
import Button from '@material-ui/core/Button';

const IncorrectButton = (props) => (
  <Button color="secondary" variant="contained" onClick={props.mark}>
  Incorrect
  </Button>)

export default IncorrectButton;