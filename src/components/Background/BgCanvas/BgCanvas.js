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
    const circleArray = this.props.circles;
    const updatedCircleArray = circleArray.map((circle)=>{
      return(
        new Circle(ctx,circle.x,circle.y,circle.dx,circle.dy,circle.radius)
      );
    });

    console.log(updatedCircleArray);
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
