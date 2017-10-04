var right_rectangle = document.getElementById("right_rectangle");
var left_rectangle = document.getElementById("left_rectangle");

var posY_leftRectangle = 100;
var posY_rightRectangle = 100;

var leftV = 0;
var rightV = 0;

var speed = 100;

var keys = { W_Key:false, S_Key:false, ArrowUp_Key:false, ArrowDown_Key:false}; //false = !pressed


document.onkeydown = keyDown;
document.onkeyup = keyUp;



//FUNCIONES


function keyDown(e) {
  e = e || window.event;

  if(e.key=="w" || e.key=="W"){
    keys.W_Key=true;
    if(keys.S_Key == false){
      leftV=-speed;
    }else{
      leftV=0;
    }
  }
  if(e.key=="s" || e.key=="S"){
    keys.S_Key=true;
    if(keys.W_Key == false){
      leftV=speed;
    }else{
      leftV=0;
    }
  }
  if(e.key=="ArrowUp"){
    keys.ArrowUp_Key = true;
    if(keys.ArrowDown_Key == false){
      rightV=-speed;
    }else{
      rightV=0;
    }

  }
  if(e.key=="ArrowDown"){
    keys.ArrowDown_Key = true;
    if(keys.ArrowUp_Key == false){
      rightV=speed;
    }else{
      rightV=0;
    }
  }
  console.log(e)
}

function keyUp(e){
  e = e || window.event;

  if(e.key=="w" || e.key=="W"){
    keys.W_Key=false;
    if(keys.S_Key==true){
      leftV=speed;
    }else{
      leftV=0;
    }
  }
  if(e.key=="s" || e.key=="S"){
    keys.S_Key=false;
    if(keys.W_Key==true){
      leftV=-speed;
    }else{
      leftV=0;
    }
  }



  if(e.key=="ArrowUp"){
    keys.ArrowUp_Key = false;
    if(keys.ArrowDown_Key==true){
      rightV=speed;
    }else{
      rightV=0;
    }
  }if(e.key=="ArrowDown"){
    keys.ArrowDown_Key = false;
    if(keys.ArrowUp_Key==true){
      rightV=-speed;
    }else{
      rightV=0;
    }
  }

}

function update(){
  posY_leftRectangle += leftV*10/1000;
  posY_rightRectangle += rightV*10/1000;

  if(keys.W_Key==false && keys.S_key==false){
    leftV=0;
  }
  if(keys.W_Key==true && keys.S_key==true){
    leftV=0;
  }

  left_rectangle.style.top  = Math.round(posY_leftRectangle) +'px';
  right_rectangle.style.top  = Math.round(posY_rightRectangle) +'px';
}


//Actualización de datos

setInterval(update, 10);
