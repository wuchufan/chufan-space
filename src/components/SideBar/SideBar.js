import React from 'react';
import classes from '../../sass/main.module.scss';

const sideBar = (props) => {
  return (<div className={classes['side-bar']}>
    <p className={[
        classes['paragraph'], classes['side-bar__paragraph']
      ].join(' ')}>test test</p>
  </div>);
};

export default sideBar;
