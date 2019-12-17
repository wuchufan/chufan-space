function Circle(ctx, x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = r;
  this.color = 'rgba(190, 225, 239, 0.4)';
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };
  this.update = function() {
    if (this.x + this.radius > window.innerWidth || this.x < this.radius) {
      this.dx = -this.dx;

    }
    if (this.y + this.radius > window.innerHeight || this.y < this.radius) {
      this.dy = -this.dy;

    }
    this.x += this.dx;
    this.y += this.dy;
  };
}


export default Circle;
export const circleConstructor=(number)=>{
    const circleArray=[];
    for (let i = 0; i < number; i++){
      let dx = Math.random() * 0.2 * (-1) ** getRndInteger(-1,1);
      let dy = Math.random() * 0.2 * (-1) ** getRndInteger(-1,1);
      let x = Math.random() * (window.innerWidth - circleConfig.radius * 2) + circleConfig.radius;
      let y = Math.random() * (window.innerHeight - circleConfig.radius * 2) + circleConfig.radius;

      circleArray.push({
        x:x,
        y:y,
        dx:dx,
        dy:dy
        });

    }
    return circleArray;
  };
export const getRndInteger=(min,max)=>{
    return Math.floor(Math.random() * (max - min) ) + min;
  };

export const circleConfig={
  radius: Math.random() * 3
}
