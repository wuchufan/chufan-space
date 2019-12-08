import React from 'react';
import SideBar from '../../hoc/SideBar/SideBar';
import classes from '../../sass/main.module.scss';


const sideBarPosts=(props)=>{
  return(
    <SideBar className={classes['side-bar']}>
      <h1>This is SideBar content for SideBarPost</h1>
    </SideBar>

  )
}

export default sideBarPosts;