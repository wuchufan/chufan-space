import React from 'react';
import classes from '../../sass/main.module.scss';

const post = (props) => {
  return (

    <div className={classes.Post}>
      <h1 className={classes['heading-primary']}>
        {props.title}
      </h1>
      <p className={classes.paragraph}>
      {props.content}
    </p>
  </div>);
};

export default post;
