import React,{Component} from 'react';
import classes from '../../sass/main.module.scss';


class SideBar extends Component{

  render(){
    return(<div className={this.props.className} onClick={this.props.clicked}>
      <p className={[
          classes['paragraph'], classes['side-bar__paragraph']
        ].join(' ')}>test test</p>
    </div>);
  }
}



export default SideBar;
