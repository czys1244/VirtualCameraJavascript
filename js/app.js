const canvas = document.querySelector('#canvas');
let cubeXYZ = [[-0.25,-0.25,0.25,1],[-0.25,-0.25,0.75,1],[0.25,-0.25,0.75,1],[0.25,-0.25,0.25,1],[0.25,0.25,0.25,1],[0.25,0.25,0.75,1],[-0.25,0.25,0.75,1],[-0.25,0.25,0.25,1],
               [-1.25,-0.25,0.25,1],[-1.25,-0.25,0.75,1],[-1.75,-0.25,0.75,1],[-1.75,-0.25,0.25,1],[-1.75,0.25,0.25,1],[-1.75,0.25,0.75,1],[-1.25,0.25,0.75,1],[-1.25,0.25,0.25,1],
               [-0.25,-0.25,1.25,1],[-0.25,-0.25,1.75,1],[0.25,-0.25,1.75,1],[0.25,-0.25,1.25,1],[0.25,0.25,1.25,1],[0.25,0.25,1.75,1],[-0.25,0.25,1.75,1],[-0.25,0.25,1.25,1],
               [-1.25,-0.25,1.25,1],[-1.25,-0.25,1.75,1],[-1.75,-0.25,1.75,1],[-1.75,-0.25,1.25,1],[-1.75,0.25,1.25,1],[-1.75,0.25,1.75,1],[-1.25,0.25,1.75,1],[-1.25,0.25,1.25,1],
               [-1.75,-0.25,1.1,1],[0.25,-0.25,1.1,1],[-1.75,-0.25,0.9,1],[0.25,-0.25,0.9,1]];
let cubeXYZ2 = [[-0.5,-0.25,0.25,1],[-0.5,-0.25,0.75,1],[0,-0.25,0.75,1],[0,-0.25,0.25,1],[0,0.25,0.25,1],[0,0.25,0.75,1],[-0.5,0.25,0.75,1],[-0.5,0.25,0.25,1]];
let projected = [[-0.25,-0.25,0.25,1],[-0.25,-0.25,0.75,1],[0.25,-0.25,0.75,1],[0.25,-0.25,0.25,1],[0.25,0.25,0.25,1],[0.25,0.25,0.75,1],[-0.25,0.25,0.75,1],[-0.25,0.25,0.25,1],[-0.75,-0.25,0.25,1],[-0.75,-0.25,0.75,1],[0.75,-0.25,0.75,1],[0.75,-0.25,0.25,1],[0.75,0.25,0.25,1],[0.75,0.25,0.75,1],[-0.75,0.25,0.75,1],[-0.75,0.25,0.25,1]];
let fov = 120;
let aspect=5/8;
let znear=10;
let zfar=100;
let pmatrix=createPerspectiveMatrix(fov,aspect,znear,zfar);


function connect(ctx,cube,a,b){
  if (cube[a][2]>0 && cube[b][2]>0){
    drawLine(ctx, [cube[a][0], cube[a][1]], [cube[b][0], cube[b][1]]);
  }
  
}
if (canvas.getContext) {
    addEventListener("keydown", (event) => { });
    document.onkeydown = checkKey;
    const ctx = canvas.getContext('2d');
    
    let rxmatrix=createXRotationMatrix(60);
    let rymatrix=createYRotationMatrix(30);
    let rzmatrix=createZRotationMatrix(30);
    let tzmatrix=zTranslationMatrix(-3);
    cubeXYZ.forEach((e,index) => {
      let res;
      res = multv(rymatrix,e);
      res = multv(tzmatrix,res);
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
