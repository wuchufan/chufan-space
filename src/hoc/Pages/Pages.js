import React, {Component} from 'react';
import classes from '../../sass/main.module.scss';
import NavBar from '../../components/NavBar/NavBar';

class Pages extends Component {

  render(){
    return(
      <div className={classes['pages__container']}>
        <div className={classes['pages__content']}>
          <NavBar/>
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default Pages;
