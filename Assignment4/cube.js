
var cube = undefined;
var gl = undefined;
var angle = 0;

function init() {
  
  var canvas = document.getElementById( "webgl-canvas" );

  gl = WebGLUtils.setupWebGL( canvas );

  if ( !gl ) {
    alert("Unable to setup WebGL");
    return;
  }

  gl.clearColor( 0.133, 0.866, 0.811, 1.0 );
  gl.enable( gl.DEPTH_TEST );

  cube = new Cube();

  render();
  
  document.getElementById("xButton").onclick = function()
  {
   //rotationAxis = xAxis;   
    console.log("You pressed a button");
  }
  document.getElementById("slider").onchange = function()
  {   
    //speed = 100 - event.srcElement.value;    
    console.log("You moved the slider");

  };
  
  canvas.onkeypress = function()
  {   
    switch( event.KeyBoard.Key ) 
    {        
      //case 'f' : speed += 10; break;        
      //case 's' : speed -= 10; break;     
        case 's' : console.log("You pressed the s key");
    } 
  };
}

function render() {
  gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

  angle += 3.0; // degrees

  cube.MV = rotate( angle, [1, 1, 0] );
  //mat4.rotate(modelViewMatrix, modelViewMatrix, cubeRotation * .7, [0, 1, 0]);
  cube.render();

  requestAnimationFrame( render ); // schedule another call to render()
}

window.onload = init;
