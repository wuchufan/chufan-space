import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import classes from '../../sass/main.module.scss';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Posts from '../../containers/Posts/Posts';
import HomePage from '../../containers/HomePage/HomePage';
import CreatePost from '../../containers/CreatePost/CreatePost';
import transition from './transitions/slide.module.scss';
import fade from './transitions/fade.module.scss';
import SideBar from '../../components/SideBar/SideBar';
import SideBarHomePage from '../../containers/HomePage/SideBarHomePage/SideBarHomePage'
import SideBarPosts from '../../containers/Posts/SideBarPosts/SideBarPosts'
import Aux from '../Aux/Aux';

class Layout extends Component {


  render() {



    return (<Aux>

      <main className={classes['main']}>


        <Route render={({location})=>{
          return (
            <Aux>
              {/* SideBar */}
              <TransitionGroup >
                <CSSTransition
                  key={location.key}
                  timeout={{
                      enter:500,
                      exit:400
                  }}
                  classNames={fade}
                  unmountOnExit
                >
                  <SideBar className={classes['side-bar']}>
                    <Switch location={location}>
                      <Route path='/posts' component={SideBarPosts}/>
                      <Route path='/' exact component={SideBarHomePage}/>
                    </Switch>
                  </SideBar>
                </CSSTransition>
              </TransitionGroup>

              {/* Content Page */}
              <TransitionGroup >
                <CSSTransition
                  key={location.key}
                  timeout={{
                    enter:500,
                    exit:400
                  }}
                  classNames={transition}
                  unmountOnExit
                >
                      <Switch location={location}>
                        <Route path='/createpost' component={CreatePost}/>
                        <Route path='/posts'  component={Posts}/>
                        <Route path='/' exact component={HomePage}/>
                      </Switch>

                    </CSSTransition>
                  </TransitionGroup>
            </Aux>);
        }}/>


      </main>
    </Aux>);
  }
}

export default Layout;
