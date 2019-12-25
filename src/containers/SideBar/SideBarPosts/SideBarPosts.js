import React from 'react';
import SideBar from '../../SideBar/SideBar';
import SideBarLayout from '../../../components/SideBarLayout/SideBarLayout';
// import classes from '../../../sass/main.module.scss';



const sideBarPosts=(props)=>{
  // const titleStyle = [classes['heading-secondary'],classes['heading-primary--main']].join(' ');
  return(
    <SideBar>
      <SideBarLayout title='Posts'>
        <p>
          <span>
            This is where meowster posts his little articles.
          </span>
        </p>
      </SideBarLayout>
      {/* <div className={classes['side-bar']}>
        <div className={classes['side-bar__title']}>
          <h1 className={titleStyle}>Posts</h1>
        </div>
        <div className={classes['side-bar__cat-words']}>
          <p className={classes['paragraph']}>
        <span>

        </span>
          </p>
        </div>
      </div> */}

    </SideBar>

  )
}

export default sideBarPosts;
