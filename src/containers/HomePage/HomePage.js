import React,{Component} from 'react';
import classes from './HomePage.module.css';

class HomePage extends Component{

  render(){

    return(
      <h1>
        <span className={classes.TextBox}>This is your Home Page.</span>
        <span className={classes.TextBox}>The Great Master is currently working hard on expanding this universe.</span>
      </h1>
    );
  }
}

export default HomePage;
