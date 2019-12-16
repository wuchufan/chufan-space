import React,{ Component } from 'react';
import BgCanvas from './BgCanvas/BgCanvas';
import classes from '../../sass/main.module.scss';


class Background extends Component{
  state = {

  }
//
// var dx = Math.random() *0.2 * (-1)**getRndInteger(-1,1);
// var dy = Math.random() * 0.2 *(-1)**getRndInteger(-1,1);
// var radius = Math.random() * 3;
// var x = Math.random() * (innerWidth - radius * 2) +radius;
// var y = Math.random() * (innerHeight - radius * 2) + radius;

//   function Circle(x , y, dx, dy,r ){
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = r;
//   this.color = 'rgba(190, 225, 239, 0.4)';
//   this.draw = function(){
//
//     c.beginPath();
//     c.arc(this.x,this.y,this.radius,0,Math.PI *2, false);
//     c.fillStyle = this.color;
//     c.fill();
//   }
//
//   this.update = function(){
//     if (this.x + this.radius> innerWidth || this.x < this.radius){
//       this.dx = -this.dx;
//
//     }
//     if (this.y + this.radius> innerHeight ||this.y < this.radius){
//       this.dy = -this.dy;
//
//     }
//     this.x+=this.dx;
//     this.y+=this.dy;
//
//   }
// }
// this.setState({circle:{
//   radius: Math.random() * 3,
//   x:Math.random() * (window.innerWidth - this.state.circle.radius * 2) + this.state.circle.radius,
//   y:Math.random() * (window.innerHeight - this.state.circle.radius * 2) + this.state.circle.radius,
//   dx:Math.random() * 0.2 * (-1) ** this.getRndInteger(-1,1),
//   dy:Math.random() * 0.2 * (-1) ** this.getRndInteger(-1,1),
//   color:'rgba(190, 225, 239, 0.4)'
// }});
  getRndInteger=(min,max)=>{
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  componentDidMount(){
    
  }


  render(){
    return (
      <BgCanvas />
    )
  }
}

export default Background;
