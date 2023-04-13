const canvas = document.querySelector('#canvas');
class Point {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.c = z;
    }
  }
function drawSquare(ctx,x1,y1,x2,y2){
    drawLine(ctx, [x1, y1], [x2, y1]);
    drawLine(ctx, [x1, y1], [x1, y2]);
    drawLine(ctx, [x1, y2], [x2, y2]);
    drawLine(ctx, [x2, y2], [x2, y1]);
}
function drawCube(ctx,p1,p2,p3,p4,p5,p6,p7,p8){
    drawLine(ctx, [p1.x, p1.y], [p2.x, p1.y]);
    drawLine(ctx, [x1, y1], [x1, y2]);
    drawLine(ctx, [x1, y2], [x2, y2]);
    drawLine(ctx, [x2, y2], [x2, y1]);
    
    drawLine(ctx, [x1, y1], [x2, y1]);
    drawLine(ctx, [x1, y1], [x1, y2]);
    drawLine(ctx, [x1, y2], [x2, y2]);
    drawLine(ctx, [x2, y2], [x2, y1]);
}
if (canvas.getContext) {
    addEventListener("keydown", (event) => { });
    document.onkeydown = checkKey;
    const ctx = canvas.getContext('2d');
    // drawLine(ctx, [0, 0], [500, 400]);
    // drawLine(ctx, [500, 0], [0, 400]);
    drawSquare(ctx, 300, 400, 500, 200);
    pmatrix=createPerspectiveMatrix(60,5/8,100,1000);
    
}
