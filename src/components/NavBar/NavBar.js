import React, {Component} from 'react';
import NavBarItems from './NavBarItems/NavBarItems';
import NavBrand from './NavBrand/NavBrand';
import classes from '../../sass/main.module.scss';

class NavBar extends Component {
  render(){
    return(
        <nav className={classes.NavBar}>
          <NavBrand link='/'/>
          <NavBarItems/>
        </nav>

    );
  }
}

export default NavBar;
