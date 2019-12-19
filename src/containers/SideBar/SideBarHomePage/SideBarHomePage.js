import React,{Component} from 'react';
import SideBar from '../../SideBar/SideBar';
import Input from '../../../components/UI/Input/Input';
import classes from '../../../sass/main.module.scss';



class SideBarHomePage extends Component{

  state={
    show:false
  }

  toggleHandler=()=>{
    console.log(123);
    this.setState({show:!this.state.show})
  }


  render(){

  return(
      <SideBar>
        <div className={classes['home']}>

          <div className={classes['home__title']}>
            <h1 className={
              [classes['heading-primary'],
              classes['u-margin-bottom-medium'],
              classes['heading-primary--main']

              ].join(' ')}>
              <span className={
                [classes['home__title-span'],
                classes['home__title-span--1']]
                .join(' ')}>
                Greetings
              </span>
              <span className={
                [classes['home__title-span'],
                classes['home__title-span--2']]
                .join(' ')}>
                traveler,
              </span>
            </h1>
          </div>
          <div className={classes['home__cat-words']}>
            <p className={classes['paragraph']}>
              <span>I'm meowster's cat!</span>
              <span>My name is Schrodinger, meow.</span>
              <span>Meowster is currently away from home.</span>
              <span>He told me to take care of the guests.</span>
              <span>So leave me the message so I can tell meowster!</span></p>
          </div>
          <div className={classes['home__message-box']}>
            <span className={classes['btn--text']} onClick={()=>this.toggleHandler()}>Leave a message meow!</span>

            <Input elementType={'textarea'} className={'home__input--textarea'}/>

          </div>
        </div>

      </SideBar>


    )
  }
}

export default SideBarHomePage;
