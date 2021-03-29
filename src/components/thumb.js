import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    marginBottom: '68px',
    overflow: 'hidden',
    width: '100%'
  },
  img: {
    backgroundColor: 'white',
    width: '100%'
  }
});

const About = ({ img, client, project }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      {img
        ? <img className={classes.img} src={img} alt="asdf"/>
        : <div className={classes.img}/>
      }
      <p style={{fontSize: 10, margin: '6px 0'}}>
        <strong>{client}</strong> —{' '}
        {project}
      </p>
    </div>
  )
};

export default About;
