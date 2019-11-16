import React,{Component} from 'react';
import classes from './Model.module.css';

class Model extends Component {


  render(){
    console.log(this.props.show);
    let modelClasses = [classes.Model];
    if(this.props.show){
      console.log(11);
      modelClasses.push(classes.ModelShow);
    } else{
      modelClasses.push(classes.ModelNotShow)
    }
    return(
      <div className={modelClasses.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}



export default Model;
