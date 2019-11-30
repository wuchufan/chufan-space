import React from 'react';
import classes from '../../sass/main.module.scss';

const post = (props) => {
  return (
    <div className={classes.Post}>
    <h1>
      {props.title}
    </h1>
    <p>
      {props.content}
    </p>
  </div>);
};

export default post;
