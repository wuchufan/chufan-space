import React,{ Component } from 'react';
import BgCanvas from './BgCanvas/BgCanvas';
import {circleConstructor} from './BgCanvas/Circle/Circle';
import classes from '../../sass/main.module.scss';

const CIRCLE = circleConstructor(100);

class Background extends Component{
  state = {
    circles: CIRCLE
  }


  componentDidMount(){
    console.log(this.state.circles);
  }


  render(){
    return (
      <BgCanvas
        circles={this.state.circles}
      />
    )
  }
}

export default Background;
