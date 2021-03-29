/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {useState, useEffect} from "react"
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: '8px 8px 25px',
    maxWidth: 360,
  },
});

const Layout = ({children}) => {
  const [counter, setCounter] = useState(0);
  const classes = useStyles();
  
  useEffect(() => {
    let intervalId = setInterval(() => {
      if (counter >= 360) {
        return setCounter(0)
      }
      setCounter(counter => counter + 1);
    }, 10);
  
    return () => clearInterval(intervalId);
  });
  
  return (
    <div className={classes.container}
    style={{background: `white`}}
    >
      <main style={{
        background: `linear-gradient(${counter}deg, rgba(255,255,255,1) 0%, rgba(171,171,171,1) 100%`
      }}>{children}</main>
    </div>
  )
};

export default Layout
