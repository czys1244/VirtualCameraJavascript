function normalize(res){
  if (res[3]!=0){
    res[0] = res[0] / res[3];
    res[1] = res[1] / res[3];
    res[2] = res[2] / res[3];
    res[3]=res[3]/res[3];
  }
  return res;
}
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        console.log("up")
        const ctx = canvas.getContext('2d');
        let xRmatrix=createXRotationMatrix(1);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xRmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            projected[index]=res;
          });
        console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
        
    }
    else if (e.keyCode == '40') {
        console.log("down")
        const ctx = canvas.getContext('2d');
        let xRmatrix=createXRotationMatrix(-1);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xRmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            projected[index]=res;
          });
          console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '37') {
        console.log("left")
        const ctx = canvas.getContext('2d');
        yRmatrix=createYRotationMatrix(-1);
        
        cubeXYZ.forEach((e,index) => {
            let res = multv(yRmatrix,e);
            
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            
            projected[index]=res;
          });
          console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
        
    }
    else if (e.keyCode == '39') {
        console.log("right")
        const ctx = canvas.getContext('2d');
        yRmatrix=createYRotationMatrix(1);
        
        cubeXYZ.forEach((e,index) => {
            let res = multv(yRmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            
            projected[index]=res;
          });
          console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '80') {
      console.log("p")
      const ctx = canvas.getContext('2d');
      zRmatrix=createZRotationMatrix(1);
      
      cubeXYZ.forEach((e,index) => {
          let res = multv(zRmatrix,e);
          cubeXYZ[index] =res;
          res=multv(pmatrix,res);
          res = normalize(res);
          
          projected[index]=res;
        });
        console.log(cubeXYZ);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCube(ctx,projected);
  }
  else if (e.keyCode == '79') {
    console.log("o")
    const ctx = canvas.getContext('2d');
    zRmatrix=createZRotationMatrix(-1);
    
    cubeXYZ.forEach((e,index) => {
        let res = multv(zRmatrix,e);
        cubeXYZ[index] =res;
        res=multv(pmatrix,res);
        res = normalize(res);
        
        projected[index]=res;
      });
      console.log(cubeXYZ);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCube(ctx,projected);
}
    else if (e.keyCode == '65') {
        console.log("a")
        const ctx = canvas.getContext('2d');
        let xTmatrix=xTranslationMatrix(-0.1);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xTmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            
            projected[index]=res;
          });
          console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '68') {
        console.log("d")
        const ctx = canvas.getContext('2d');
        let xTmatrix=xTranslationMatrix(0.1);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xTmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            
            projected[index]=res;
          });
          console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '87') {
        console.log("w")
        const ctx = canvas.getContext('2d');
        let yTmatrix=yTranslationMatrix(-0.1);
       
        cubeXYZ.forEach((e,index) => {
            let res = multv(yTmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            projected[index]=res;
          });
          console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '83') {
        console.log("s")
        const ctx = canvas.getContext('2d');
        let yTmatrix=yTranslationMatrix(0.1);
        cubeXYZ.forEach((e,index) => {
            let res = multv(yTmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            
            projected[index]=res;
          });
          console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '81') {
        console.log("q")
        const ctx = canvas.getContext('2d');
        let zTmatrix=zTranslationMatrix(-0.1);
        console.log()
        cubeXYZ.forEach((e,index) => {
            let res = multv(zTmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            
            projected[index]=res;
          });
        console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '69') {
        console.log("e")
        const ctx = canvas.getContext('2d');
        let zTmatrix=zTranslationMatrix(0.1);
        
        cubeXYZ.forEach((e,index) => {
            let res = multv(zTmatrix,e);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            res = normalize(res);
            
            projected[index]=res;
          });
        console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '109') {
      console.log("-")
      const ctx = canvas.getContext('2d');
      zoom(10);
      
      cubeXYZ.forEach((e,index) => {
          let res=multv(pmatrix,e);
          res = normalize(res);
          
          projected[index]=res;
        });
        console.log(fov);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCube(ctx,projected);
  }
  else if (e.keyCode == '107') {
    console.log("+")
    const ctx = canvas.getContext('2d');
    zoom(-10);
    
    cubeXYZ.forEach((e,index) => {
        let res=multv(pmatrix,e);
        res = normalize(res);
        
        projected[index]=res;
      });
      console.log(fov);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCube(ctx,projected);
}
}