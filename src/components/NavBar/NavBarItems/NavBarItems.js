import React from 'react';
import NavBarItem from './NavBarItem/NavBarItem';
import classes from '../../../sass/main.module.scss';

const navBarItems=(props)=>{
  return(
    <ul className={classes.NavBarItems}>
      <NavBarItem link='/'>Home</NavBarItem>
      <NavBarItem link='/posts'>Posts</NavBarItem>
    </ul>
  );
}

export default navBarItems;
