import React from 'react';
import classes from './Button.module.css';

const button = (props) =>{
  return(
    <button onClick={props.action} className={classes.btn}>{props.children}</button>
  );
};

export default button;
