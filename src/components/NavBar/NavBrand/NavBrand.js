import React from 'react';
import classes from './NavBrand.module.css';
import {NavLink} from 'react-router-dom';

const navBrand=(props)=>{
  return(
    <div>

      <NavLink
        to={props.link}
        className={classes.NavBrand}>Chufan Wu</NavLink>

      </div>
  );

}

export default navBrand;
