import React, {Component} from 'react';
import classes from '../../sass/main.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import Aux from '../Aux/Aux';

class Layout extends Component {
  state={
    layoutWidth:'medium'
  }

  sideBarClickedHandler=(width)=>{
    switch (width){
      case 'medium':
      this.setState({layoutWidth:'small'});
      break
      case 'small':
      this.setState({layoutWidth:'medium'});
      break
      default:
      break
    }
  }

  render() {
    let sideBarStyle=[classes['side-bar']];
    let containerStyle=[classes['main__container']];
    switch(this.state.layoutWidth){
      case 'medium':
      sideBarStyle.push(classes['side-bar--width-medium']);
      containerStyle.push(classes['main__container--width-medium']);
      break;
      case 'small':
      sideBarStyle.push(classes['side-bar--width-small']);
      containerStyle.push(classes['main__container--width-small']);
      break;
      default:
      break;
    }


    return (<Aux>

      <main className={classes['main']}>

        <SideBar className={sideBarStyle.join(' ')} clicked={()=>this.sideBarClickedHandler(this.state.layoutWidth)}/>
        <div className={containerStyle.join(' ')}>
          <div className={classes['main__content']}>
            <NavBar/>
            {this.props.children}
          </div>

        </div>
      </main>
    </Aux>);
  }
}

export default Layout;
