import React from 'react';
import Button from '@material-ui/core/Button';

const CorrectButton = (props) => (
  <Button color="primary" variant="contained" onClick={props.mark}>
  Correct
  </Button>)

export default CorrectButton;