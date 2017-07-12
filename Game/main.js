var button = document.getElementById("boton");
var text = document.getElementById("puntos");
var puntos = 0;
var cuadrado = document.getElementById("cuadrado");

var posX = 50;
var posY = 50;
button.onclick = function(){
  puntos+=1;
  text.innerText = puntos;
  }
  
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if(e.key=="w"){
		posY-=10;
	}if(e.key=="a"){
		posX-=10;
	}if(e.key=="s"){
		posY+=10;
	}if(e.key=="d"){
		posX+=10;
	}
	console.log(e)
	
	
	cuadrado.style.left = posX+'px';
	cuadrado.style.top  = posY+'px';
}
  


