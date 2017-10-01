var right_rectangle = document.getElementById("right_rectangle");
var left_rectangle = document.getElementById("left_rectangle");

var posY_leftRectangle = 100;
var posY_rightRectangle = 100;

var leftV = 0;
var rightV = 0;

var speed = 100;


document.onkeydown = keyDown;
document.onkeyup = keyUp;

function keyDown(e) {
	e = e || window.event;

	if(e.key=="w" || e.key=="W"){
		leftV=-speed;
	}
	if(e.key=="s" || e.key=="S"){
		leftV=speed;
	}
	if(e.key=="ArrowUp"){
		rightV=-speed;
	}
	if(e.key=="ArrowDown"){
		rightV=speed;
	}
	console.log(e)
}

function keyUp(e){
	e = e || window.event;
	
	if(e.key=="w" || e.key=="W" || e.key=="s" || e.key=="S"){
		leftV=0;
	}
	if(e.key=="ArrowUp" || e.key=="ArrowDown"){
  		rightV=0;
	}
}

function update(){
	posY_leftRectangle += leftV*10/1000;
	posY_rightRectangle += rightV*10/1000;

	left_rectangle.style.top  = Math.round(posY_leftRectangle) +'px';
	right_rectangle.style.top  = Math.round(posY_rightRectangle) +'px';
}

setInterval(update, 10);
