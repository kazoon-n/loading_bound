window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 20000);
        };
})();


var canvas = document.querySelector('#stage');
var casWith = document.getElementById('stage');
var ctx = canvas.getContext('2d');
var counter = 0;

var Particle = function(scale, color, vx, vy, gv) {
    this.scale = scale; //大きさ
    this.color = color; //色
    this.vx = vx; //X速度
    this.vy = vy; //Y速度
    this.gv = gv; //重力
    this.position = {   // 位置
        x: 0,
        y: 0
    };
};

Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.scale, 0, 2*Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
};

Particle.prototype.update = function() {
    this.vy += this.gv;
    this.position.x += this.vx;
    this.position.y += this.vy;

    if (this.position.y > canvas.height - this.scale) {
    this.vy *= -0.55;
    this.vx += 4;
    this.position.y = canvas.height - this.scale;
    counter++;
    if(counter == 2){
        this.vy *= 4;
        this.vx = 0;
        this.position.y = canvas.height - this.scale;
        counter = 0;
    }
    if(this.position.x > casWith.width){
        this.position.x = 30;
        this.position.y = -50;
        this.vx = 0;
        this.vy = -1;
        this.gv = 0.4;
    }
}

    this.draw();
};

//var Particle = function(scale, color, vx, vy, gv) {
var particle = new Particle(8, '#FFF', 0, -15, 0.8);
particle.position.x = 30;
particle.position.y =  -50;

loop();



// ループ処理
function loop() {
    requestAnimFrame(loop);
    // 描画をクリアー
    ctx.globalAlpha = 0.01;
    ctx.fillStyle = 'rgb(0, 0, 255)';
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalAlpha = 1;


//    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    particle.update();
}