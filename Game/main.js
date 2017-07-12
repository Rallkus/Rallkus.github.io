var button = document.getElementById("boton");
var text = document.getElementById("boton");
var puntos = 0;
button.onclick = function(){
  puntos+=1;
  text.innerhtml = puntos;
  }
