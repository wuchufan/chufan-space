import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import classes from '../../sass/main.module.scss';
import transition from './transitions/slide.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Aux from '../Aux/Aux';

class Layout extends Component {


  render() {



    return (<Aux>

      <main className={classes['main']}>

        <SideBar className={classes['side-bar']}/>
        <Route render={({location})=>{

          return (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={600}
                classNames={transition}
                unmountOnExit
                  >

                <div className={classes['main__container']}>
                  <div className={classes['main__content']}>
                    <NavBar/>
                    {this.props.children}
                  </div>
                </div>

              </CSSTransition>
            </TransitionGroup>);

        }}/>


      </main>
    </Aux>);
  }
}

export default Layout;
