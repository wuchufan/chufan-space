import React, {Component} from 'react';
import classes from './Layout.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Aux from '../Aux/Aux';



class Layout extends Component {


  render(){
    return(
      <Aux>
        <NavBar/>
        <main className={classes.content}>{this.props.children}</main>
      </Aux>

    );
  }
}

export default Layout;
