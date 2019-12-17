import React,{ Component } from 'react';
import Circle from './Circle/Circle';
import classes from '../../../sass/main.module.scss';


class BgCanvas extends Component{

  getRndInteger=(min,max)=>{
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  componentDidMount(){

    const canvas = this.refs.canvas;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const ctx = canvas.getContext('2d');
    const circleArray=[];
    const circleConfig = {...this.props}
    for (let i = 0; i < 100; i++){
      let radius = Math.random() * 3;
      // let dx = Math.random() * 0.2 * (-1) ** this.getRndInteger(-1,1);
      // let dy = Math.random() * 0.2 * (-1) ** this.getRndInteger(-1,1);
      // let x = Math.random() * (window.innerWidth - radius * 2) +radius;
      // let y = Math.random() * (window.innerHeight - radius * 2) + radius;
      let dx = circleConfig.dx;
      let dy = circleConfig.dy;
      let x = circleConfig.x;
      let y = circleConfig.y;

      circleArray.push(new Circle(ctx,x,y,dx,dy,radius));

    }
    for (let i = 0; i<circleArray.length; i++){
      circleArray[i].draw();
    }
  }


  render(){
    return (
      <canvas ref="canvas" className={classes['canvas']}>

      </canvas>
    )
  }
}

export default BgCanvas;
