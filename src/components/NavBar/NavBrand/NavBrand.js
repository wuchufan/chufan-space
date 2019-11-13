import React from 'react';
import classes from './NavBrand.module.css';
import {NavLink} from 'react-router-dom';

const navBrand=(props)=>{
  return(
    <div>
      <h1><NavLink
        to={props.link}
        className={classes.NavBrand}>Welcome</NavLink></h1>

      </div>
  );

}

export default navBrand;
