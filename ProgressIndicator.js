import React from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const style = {
  fontSize:'.7em',
  padding:'2px'
}

const ProgressIndicator = (props) => (
  <>  
  {props.q.map((x,i) => <Chip style={style} size="small" variant={props.currentQ==i?"outlined":"default"} color={x.correct?"primary":"secondary"} size="small" label={i+1} />)}
  </>
)

export default ProgressIndicator;