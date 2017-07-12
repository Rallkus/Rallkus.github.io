var button = document.getElementById("boton");
var text = document.getElementById("puntos");
var puntos = 0;
button.onclick = function(){
  puntos+=1;
  text.innerText = puntos;
  }
