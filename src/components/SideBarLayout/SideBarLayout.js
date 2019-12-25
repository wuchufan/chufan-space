import React from 'react';
import classes from '../../sass/main.module.scss';

const sideBarContent = (props) =>{

  return(
    <div className={classes['side-bar-layout']}>
      <div className={classes['side-bar-layout__title']}>
        <h1 className={[classes['heading-secondary'],classes['heading-secondary--main']].join(' ')}>
          {props.title}
        </h1>
      </div>
      <div className={classes['side-bar-layout__cat-words']}>
        {props.children}
      </div>
      <div className={classes['side-bar-layout__other']}>

      </div>
    </div>
  );
};

export default sideBarContent;
