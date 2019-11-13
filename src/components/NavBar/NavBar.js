import React, {Component} from 'react';
import NavBarItems from './NavBarItems/NavBarItems';
import NavBrand from './NavBrand/NavBrand';
import classes from './NavBar.module.css';

class NavBar extends Component {
  render(){
    return(
      <header>

        <nav className={classes.NavBar}>
          <NavBrand link='/'/>
          <NavBarItems/>
        </nav>
      </header>
    );
  }
}

export default NavBar;
