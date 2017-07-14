var button = document.getElementById("boton");
var text = document.getElementById("puntos");
var puntos = 0;
var cuadrado = document.getElementById("cuadrado");

var posX = 50;
var posY = 50;

button.onclick = function(){
  puntos+=1;
  text.innerText = puntos;
  posY=(Math.random()*1000%550)+50;
  posX=(Math.random()*1000%1150)+50;

  cuadrado.style.left = posX+'px';
	cuadrado.style.top  = posY+'px';
  }

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if(e.key=="w"){
		posY-=10;
    puntos+=1;
    text.innerText = puntos;
	}if(e.key=="a"){
		posX-=10;
    puntos+=1;
    text.innerText = puntos;
	}if(e.key=="s"){
		posY+=10;
    puntos+=1;
    text.innerText = puntos;
	}if(e.key=="d"){
		posX+=10;
    puntos+=1;
    text.innerText = puntos;
	}
	console.log(e)


	cuadrado.style.left = posX+'px';
	cuadrado.style.top  = posY+'px';
}
