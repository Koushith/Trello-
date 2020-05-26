import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

export default function Card() {
  // ref to js styles
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.card}>Making youtube videos</Paper>
    </div>
  );
}
