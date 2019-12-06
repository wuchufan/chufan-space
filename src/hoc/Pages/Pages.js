import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import classes from '../../sass/main.module.scss';
import NavBar from '../../components/NavBar/NavBar';

class Pages extends Component {

  render(){
    let pageWidth=[classes['pages__container']];

    switch (this.props.location.pathname){
      case '/':
        pageWidth.push(classes['pages__width-medium']);
      break;

      case '/posts':
      pageWidth.push(classes['pages__width-large']);
      break;

      default:
      pageWidth.push(classes['pages__width-medium']);
      break;
    }
    return(
      <div className={pageWidth.join(' ')}>
        <div className={classes['pages__content']}>
          <NavBar/>
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default withRouter(Pages);
