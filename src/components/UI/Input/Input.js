import React from 'react';
import classes from './Input.module.css';

const input=(props)=>{
  let inputElement=null;
  switch (props.elementType){
    case('input'):
    inputElement=<input value={props.value} className={classes.InputElement} onChange={props.inputChanged} {...props.elementConfig}/>;
    break;
    case('textarea'):
    inputElement=<textarea value={props.value} className={classes.InputElement+' '+classes.TextArea} onChange={props.inputChanged} {...props.elementConfig}/>;
    break;
    default:
    inputElement=<input value={props.value} className={classes.InputElement} onChange={props.inputChanged} {...props.elementConfig}/>;
    }
    return(
      <div>
        <label className={classes.Label}>{props.children}</label>
        {inputElement}
      </div>
    );
  }




export default input;
