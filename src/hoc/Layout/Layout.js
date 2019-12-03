import React, {Component} from 'react';
import classes from '../../sass/main.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import Aux from '../Aux/Aux';

class Layout extends Component {

  render() {
    return (<Aux>

      <NavBar/>

      <main className={classes['main']}>
        <SideBar/>
        <div className={classes['main__pages']}>
          {this.props.children}
        </div>

      </main>

    </Aux>);
  }
}

export default Layout;
