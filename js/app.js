const canvas = document.querySelector('#canvas');
let cubeXYZ = [[-0.25,-0.25,0.25,1],[-0.25,-0.25,0.75,1],[0.25,-0.25,0.75,1],[0.25,-0.25,0.25,1],[0.25,0.25,0.25,1],[0.25,0.25,0.75,1],[-0.25,0.25,0.75,1],[-0.25,0.25,0.25,1]];
let projected = [[-0.25,-0.25,0.25,1],[-0.25,-0.25,0.75,1],[0.25,-0.25,0.75,1],[0.25,-0.25,0.25,1],[0.25,0.25,0.25,1],[0.25,0.25,0.75,1],[-0.25,0.25,0.75,1],[-0.25,0.25,0.25,1]];
let pmatrix=createPerspectiveMatrix(120,5/8,100,1000);

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
    
    let rxmatrix=createXRotationMatrix(60);
    let rymatrix=createYRotationMatrix(30);
    let rzmatrix=createZRotationMatrix(30);
    cubeXYZ.forEach((e,index) => {
      let res = multv(rymatrix,e);
      // res=multv(rymatrix,e);
      
      cubeXYZ[index]=res;
      res = multv(pmatrix,res);
      if (res[3]!=0){
        res[0] = res[0] / res[3];
        res[1] = res[1] / res[3];
        res[2] = res[2] / res[3];
        res[3]=res[3]/res[3];
      }
      projected[index] =res;
    });
    // console.log(cubeXYZ);
    drawCube(ctx,projected);
}
