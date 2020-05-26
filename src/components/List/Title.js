// Titles on Todo Card

import React, { useState } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { findByLabelText } from '@testing-library/react';

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: 'flex',
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  input: {
    margin: theme.spacing(1),
    '&:focus': {
      background: '#ddd',
    },
  },
}));

const Title = () => {
  // state to edit card title
  const [open, setOpen] = useState(false);

  // ref to js styles
  const classes = useStyle();
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value='Todo'
            inputProps={{ className: classes.input }}
            fullWidth
            onBlur={() => setOpen(!open)}
            // onblur even- inverse of onfoucus- when user leaves -        />

            autoFocus
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            Todo
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;

// by default title is not editable, when user clicks -make it editale
