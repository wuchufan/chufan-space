import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import classes from './Layout.module.scss';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Posts from '../../containers/Posts/Posts';
import HomePage from '../../containers/HomePage/HomePage';
import About from '../../containers/About/About';
import Library from '../../containers/Library/Library';
import CreatePost from '../../containers/CreatePost/CreatePost';
import transition from '../../sass/transitions/slide.module.scss';
import fade from '../../sass/transitions/fade.module.scss';
import SideBarHomePage from '../../containers/SideBar/SideBarHomePage/SideBarHomePage';
import SideBarPosts from '../../containers/SideBar/SideBarPosts/SideBarPosts';
import SideBarLibrary from '../../containers/SideBar/SideBarLibrary/SideBarLibrary';
import SideBarAbout from '../../containers/SideBar/SideBarAbout/SideBarAbout';
import Background from '../../components/Background/Background';
import Aux from '../Aux/Aux';

class Layout extends Component {

  render() {

    return (<Aux>
      <Background/>
      <main className={classes['main']}>

        <Route render={({location}) => {
          return (<Aux>
            {/* SideBar */}
            <TransitionGroup >
              <CSSTransition key={location.key} timeout={{
                enter: 500,
                exit: 400
              }} classNames={fade} unmountOnExit>

                <Switch location={location}>
                  <Route path='/about' component={SideBarAbout}/>
                  <Route path='/library' component={SideBarLibrary}/>
                  <Route path='/posts' component={SideBarPosts}/>
                  <Route path='/' exact component={SideBarHomePage}/>
                </Switch>

              </CSSTransition>
            </TransitionGroup>

            {/* Content Page */}
            <TransitionGroup >
              <CSSTransition key={location.key} timeout={{
                enter: 500,
                exit: 400
              }} classNames={transition} unmountOnExit>
                <Switch location={location}>
                  <Route path='/createpost' component={CreatePost}/>
                  <Route path='/library' component={Library}/>
                  <Route path='/about' component={About}/>
                  <Route path='/posts' component={Posts}/>
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
