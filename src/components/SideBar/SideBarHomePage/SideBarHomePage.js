import React from 'react';
import SideBar from '../../SideBar/SideBar';
import classes from '../../../sass/main.module.scss';



const sideBarHomePage=(props)=>{
  return(
      <SideBar>
        <h1 className={classes['heading-primary']}>Greetings traveler.</h1>
        <h1>My name is Schrodinger,</h1>
        <h1>I'm meowster's cat!</h1>
        <h1>I have a sister called Einstein.</h1>
        <h1>Meowster is currently away from home,</h1>
        <h1>and he told me to take care of the guests.</h1>
        <h1>So leave me the message so I can tell meowster!</h1>

      </SideBar>


  )
}

export default sideBarHomePage;
