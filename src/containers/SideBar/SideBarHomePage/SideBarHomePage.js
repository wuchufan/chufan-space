import React from 'react';
import SideBar from '../../SideBar/SideBar';
import Input from '../../../components/UI/Input/Input';
import classes from '../../../sass/main.module.scss';



const sideBarHomePage=(props)=>{
  return(
      <SideBar>
        <div className={classes['home']}>

          <div className={classes['home__title']}>
            <h1 className={
              [classes['heading-primary'],
              classes['u-margin-bottom-medium']
              ].join(' ')}>Greetings traveler,</h1>
          </div>
          <div className={classes['home__cat-words']}>

            <p className={classes['paragraph']}>My name is Schrodinger,</p>
            <p className={classes['paragraph']}>I'm meowster's cat!</p>
            <p className={classes['paragraph']}>I have a sister called Einstein.</p>
            <p className={classes['paragraph']}>Meowster is currently away from home.</p>
            <p className={classes['paragraph']}>He told me to take care of the guests.</p>
            <p className={classes['paragraph']}>So leave me the message so I can tell meowster!</p>
          </div>
          <div className={classes['home__message-box']}>
            <Input elementType={'textarea'} className={'home__input--textarea'}>
              Leave your message here meow!
            </Input>
          </div>
        </div>

      </SideBar>


  )
}

export default sideBarHomePage;
