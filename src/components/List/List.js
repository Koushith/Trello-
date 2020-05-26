import React from 'react';
import { Paper, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

// Material UI Styles
const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    backgroundColor: '#EBECF0',
    marginLeft: theme.spacing(1),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
}));
function List() {
  const classes = useStyle();
  return (
    <div>
      <CssBaseline />
      <Paper className={classes.root}>
        <Title />
      </Paper>
    </div>
  );
}
export default List;
