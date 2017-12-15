var start = (function() {
	'use strict';

	//Canvasをする領域を指定する
	var stage = document.getElementById('stage');
	var ctx;
	var width = 480;
	var height = 260;
	var dpr;


	var App;
	var app;

	var Car;
	var car;

	Car = function(x, y){
		this.x = x;
		this.y = y;
		this.draw = function(){
			ctx.fillRect(this.x, this.y, 100, 60);
			this.x += 2;
			this.y += 3;
			if(this.x > width){
				this.x = -100;
			}
			if(this.y > height){
				this.y = - 20;
			}

		};
	};


	App = function() {
		this.setup = function(){

			if(typeof stage.getContext === 'undefined'){
				return;
			}

			ctx = stage.getContext('2d');
			dpr = window.devicePixelRatio || 1;


			stage.width = width * dpr;
			stage.height = height * dpr;
			ctx.scale(dpr, dpr);
			stage.style.width = width + 'px';
			stage.style.height = height + 'px';

		};

		this.draw = function(){
			//描画するかんすう
				ctx.clearRect(x, y , width, height);
				car.draw();

			setTimeout(function() {

				this.draw();

			}.bind(this), 10);
		};


	};

	//Animation
	var x = 100;
	var y = 100;

	car = new Car(100, 100);
	app = new App();
	app.setup();
	app.draw(); 



});