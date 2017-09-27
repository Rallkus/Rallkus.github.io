var right_rectangle = document.getElementById("right_rectangle");
var left_rectangle = document.getElementById("left_rectangle");

var posY_leftRectangle = 100;
var posY_rightRectangle = 100;


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if(e.key=="w" || e.key=="W"){
		posY_leftRectangle-=10;
	}
	if(e.key=="s" || e.key=="S"){
		posY_leftRectangle+=10;
	}if(e.key=="ArrowUp"){
  posY_rightRectangle-=10;
}
if(e.key=="ArrowDown"){
  posY_rightRectangle+=10;
}

	console.log(e)


	left_rectangle.style.top  = posY_leftRectangle +'px';
  right_rectangle.style.top  = posY_rightRectangle +'px';
}
