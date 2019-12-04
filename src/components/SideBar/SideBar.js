import React,{Component} from 'react';
import classes from '../../sass/main.module.scss';


class SideBar extends Component{
  state={
    sideBar:true
  }
  widthChangeHandler=()=>{

    this.setState({sideBar:!this.state.sideBar});
  }

  render(){

    let sideBarStyle=[classes['side-bar']];
    if (!this.state.sideBar){
      sideBarStyle.push(classes['side-bar--width-small']);
    } else {
    sideBarStyle.push(classes['side-bar--width-medium']);
    }


    return(<div className={sideBarStyle.join(' ')} onClick={this.widthChangeHandler}>
      <p className={[
          classes['paragraph'], classes['side-bar__paragraph']
        ].join(' ')}>test test</p>
    </div>);
  }
}



export default SideBar;
