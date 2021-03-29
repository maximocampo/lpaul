import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    borderTop: '1px dashed black',
    borderBottom: '1px dashed black',
    '& p': {
      margin: 0
    }
  }
});

const Title = ({ children }) => {
  const classes = useStyles();

  return (<div className={classes.container}><p>{children}</p></div>)
};

export default Title;
