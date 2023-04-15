const canvas = document.querySelector('#canvas');
let cubeXYZ = [[-0.25,-0.25,0.25,1],[-0.25,-0.25,0.75,1],[0.25,-0.25,0.75,1],[0.25,-0.25,0.25,1],[0.25,0.25,0.25,1],[0.25,0.25,0.75,1],[-0.25,0.25,0.75,1],[-0.25,0.25,0.25,1]];
let pmatrix=createPerspectiveMatrix(90,5/8,0.1,1);
function drawSquare(ctx,x1,y1,x2,y2){
    drawLine(ctx, [x1, y1], [x2, y1]);
    drawLine(ctx, [x1, y1], [x1, y2]);
    drawLine(ctx, [x1, y2], [x2, y2]);
    drawLine(ctx, [x2, y2], [x2, y1]);
}

function drawCube(ctx,c){
  connect(ctx,c,0,1);
  connect(ctx,c,1,2);
  connect(ctx,c,2,3);
  connect(ctx,c,3,0);

  connect(ctx,c,0,7);
  connect(ctx,c,3,4);
  connect(ctx,c,2,5);
  connect(ctx,c,1,6);

  connect(ctx,c,4,5);
  connect(ctx,c,5,6);
  connect(ctx,c,6,7);
  connect(ctx,c,7,4);
}
function connect(ctx,cube,a,b){

  drawLine(ctx, [cube[a][0], cube[a][1]], [cube[b][0], cube[b][1]]);
}
if (canvas.getContext) {
    addEventListener("keydown", (event) => { });
    document.onkeydown = checkKey;
    const ctx = canvas.getContext('2d');
    // drawLine(ctx, [-0.25, -0.25], [0.25, 0.25]);
    // drawSquare(ctx, 300, 400, 500, 200);
    
    // console.log(pmatrix);
    let rxmatrix=createXRotationMatrix(30);
    let rymatrix=createYRotationMatrix(60);
    let rzmatrix=createZRotationMatrix(30);
    cubeXYZ.forEach((e,index) => {
      let res = multv(pmatrix,e);
      res = multv(rxmatrix,e);
      res=multv(rymatrix,res);
      res=multv(rzmatrix,res);
      // res = multv(pmatrix,res);
      if (res[3]!=0){
        res[0] = res[0] / res[3];
        res[1] = res[1] / res[3];
        res[2] = res[2] / res[3];
        res[3]=res[3]/res[3];
      }
      
      // console.log(res);
      cubeXYZ[index] =res;
    });
    console.log(cubeXYZ);
    drawCube(ctx,cubeXYZ);
}
