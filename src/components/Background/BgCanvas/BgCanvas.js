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
    this.ctx = canvas.getContext('2d');

  }
  componentDidUpdate(){
    this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    const circleArray = this.props.circles;
    const updatedCircleArray = circleArray.map((circle)=>{
      return(
        new Circle(this.ctx,circle.x,circle.y,circle.dx,circle.dy,circle.radius)
      );
    });


    for (let i = 0; i<updatedCircleArray.length; i++){

      updatedCircleArray[i].draw();
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
