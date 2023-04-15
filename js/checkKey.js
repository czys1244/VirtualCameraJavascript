function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        console.log("up")
        const ctx = canvas.getContext('2d');
        let xRmatrix=createXRotationMatrix(-100);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xRmatrix,e);
            res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,cubeXYZ);
        
    }
    else if (e.keyCode == '40') {
        console.log("down")
        const ctx = canvas.getContext('2d');
        let xRmatrix=createXRotationMatrix(1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xRmatrix,e);
            res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            if (res[3]!=0){
              res[0] = res[0] / res[3];
              res[1] = res[1] / res[3];
              res[2] = res[2] / res[3];
              res[3]=res[3]/res[3];
            }
            
            console.log(res);
            cubeXYZ[index] =res;
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,cubeXYZ);
    }
    else if (e.keyCode == '37') {
        console.log("left")
        const ctx = canvas.getContext('2d');
        yRmatrix=createYRotationMatrix(1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(yRmatrix,e);
            res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            if (res[3]!=0){
              res[0] = res[0] / res[3];
              res[1] = res[1] / res[3];
              res[2] = res[2] / res[3];
              res[3]=res[3]/res[3];
            }
            
            console.log(res);
            cubeXYZ[index] =res;
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,cubeXYZ);
        
    }
    else if (e.keyCode == '39') {
        console.log("left")
        const ctx = canvas.getContext('2d');
        yRmatrix=createYRotationMatrix(-1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(yRmatrix,e);
            res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            if (res[3]!=0){
              res[0] = res[0] / res[3];
              res[1] = res[1] / res[3];
              res[2] = res[2] / res[3];
              res[3]=res[3]/res[3];
            }
            
            console.log(res);
            cubeXYZ[index] =res;
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,cubeXYZ);
    }

}