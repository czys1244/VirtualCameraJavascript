const canvas = document.querySelector('#canvas');

function drawSquare(ctx,x1,y1,x2,y2){
    drawLine(ctx, [x1, y1], [x2, y1]);
    drawLine(ctx, [x1, y1], [x1, y2]);
    drawLine(ctx, [x1, y2], [x2, y2]);
    drawLine(ctx, [x2, y2], [x2, y1]);
}
function drawCube(ctx,p){
  drawLine(ctx, [10000*p[0][0], 10000*p[0][1]], [10000*p[1][0], 10000*p[1][1]]);
  console.log(p);
  // console.log(p[01]);

}
if (canvas.getContext) {
    addEventListener("keydown", (event) => { });
    document.onkeydown = checkKey;
    const ctx = canvas.getContext('2d');
    // drawLine(ctx, [0, 0], [500, 400]);
    // drawLine(ctx, [500, 0], [0, 400]);
    // drawSquare(ctx, 300, 400, 500, 200);
    cubeXYZ = [[1,1,1,1],[1,1,0.5,1],[1.5,1,0.5,1],[1.5,1,1,1],[1.5,1.5,1,1],[1.5,1.5,0.5,1],[1,1.5,0.5,1],[1,1.5,1,1]];
    // drawCube(ctx, new Point(100,100,100),new Point(100,100,50),new Point(150,100,50),new Point(150,100,100),new Point(150,150,100),new Point(150,150,50),new Point(100,150,50),new Point(100,150,100));
    pmatrix=createPerspectiveMatrix(60,5/8,120,1000);
    cubeXYZ.forEach((e,index) => {
      let res = multv(pmatrix,e);
      res[0] = res[0] / res[2];
      res[1] = res[1] / res[2];
      res[2] = res[2] / res[2];
      // console.log(res);
      cubeXYZ[index] =res;
    });
    drawCube(ctx,cubeXYZ);
}
