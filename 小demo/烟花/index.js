// 1、先创建一个Canvas
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// resize画布
function resizeCanvas() {
    // 设置画布宽高，填充颜色，填充方式
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
    context.fillStyle = '#000000';
    context.fillRect(0,0,canvas.width, canvas.height);
}

// 清除画布
function clearCanvas(){
	context.fillStyle = '#000000';
  context.fillRect(0,0,canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();


// 2、绘制烟花形状


function mouseDownHandler(e) {
  var x = e.clientX;
  var y = e.clientY;
  var particles = [] // 烟花粒子
  var radius = 0;// 烟花环绕半径

  fire(x,y,radius,particles) // 开始放烟花
}


function drawFireworks(radius,particles) {
  clearCanvas();
  var count = 10;//烟花粒子数量

  for(var i = 0 ;i<particles.length;i++){
    var p = particles[i];
    // var vx = Math.cos(p.radians) * p.radius;
    // var vy = Math.sin(p.radians) * p.radius + 0.4;
    
    // p.x += vx;
    // p.y += vy;
    
    // p.radius *= 1 - p.speed/100;
    
    // p.alpha -= 0.005;

    p.vx = p.sx+Math.cos(p.radians) * p.radius;
    p.vy = p.sy+Math.sin(p.radians) * p.radius;

    p.radius += 1+p.speed;

    context.beginPath();
    context.arc(p.vx, p.vy, p.size, 0, Math.PI*2, false);
    context.closePath();
    context.fillStyle = 'hsla('+p.hue+', 100%, '+p.brightness+'%, '+100+')';
    context.fill();
  }

}

document.addEventListener('mousedown', mouseDownHandler, false);

// 3、烟花动起来
function fire(x,y,radius,particles){
  createFireworks(x,y,particles); // 烟花粒子
  function tick() {
      radius++ //半径不断变大
      context.globalCompositeOperation = 'destination-out';
      context.fillStyle = 'rgba(0,0,0,'+10/100+')';
      context.fillRect(0,0,canvas.width,canvas.height);
      context.globalCompositeOperation = 'lighter';

      drawFireworks(radius,particles);//绘制烟花
      requestAnimationFrame(tick);
  }
  tick()
}

// 4、烟花粒子
function createFireworks(sx,sy,particles){
    var hue = Math.floor(Math.random()*51)+150;
    var hueVariance = 30;
    var count = 100;

    for(var i = 0 ;i<count;i++){
        var p = {};

        var angle = Math.floor(Math.random()*360);
        p.radians = angle * Math.PI / 180;
        p.radius = 0;

        p.sx = sx;
        p.sy = sy;

        p.speed = (Math.random()*5)+.4;

        p.size = Math.floor(Math.random()*3)+1;

        p.hue = Math.floor(Math.random()*((hue+hueVariance)-(hue-hueVariance)))+(hue-hueVariance);
        p.brightness = Math.floor(Math.random()*31)+50;
        p.alpha = (Math.floor(Math.random()*61)+40)/100;

        particles.push(p);
    }
}


