import React,{ Component } from 'react';
import BgCanvas from './BgCanvas/BgCanvas';
import {circleConstructor} from './BgCanvas/Circle/Circle';
import classes from '../../sass/main.module.scss';
// 
// const CIRCLE_CONFIG={
//   radius: Math.random() * 3
// }

// const circleConstructor=(number)=>{
//     const circleArray=[];
//     for (let i = 0; i < number; i++){
//       let dx = Math.random() * 0.2 * (-1) ** getRndInteger(-1,1);
//       let dy = Math.random() * 0.2 * (-1) ** getRndInteger(-1,1);
//       let x = Math.random() * (window.innerWidth - CIRCLE_CONFIG.radius * 2) + CIRCLE_CONFIG.radius;
//       let y = Math.random() * (window.innerHeight - CIRCLE_CONFIG.radius * 2) + CIRCLE_CONFIG.radius;
//
//       circleArray.push({
//         x:x,
//         y:y,
//         dx:dx,
//         dy:dy
//         });
//
//     }
//     return circleArray;
//   }
// const getRndInteger=(min,max)=>{
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }
const CIRCLE = circleConstructor(100);

class Background extends Component{
  state = {
    circle: CIRCLE
  }


  componentDidMount(){
    console.log(this.state.circle);
  }


  render(){
    return (
      <BgCanvas

      />
    )
  }
}

export default Background;
