import React,{Component} from 'react';
import classes from '../../sass/main.module.scss';


class SideBar extends Component{

  render(){
    return(
      <div className={classes['side-bar']}>
        {this.props.children}

    </div>);
  }
}



export default SideBar;
