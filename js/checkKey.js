function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        console.log("up")
        const ctx = canvas.getContext('2d');
        let xRmatrix=createXRotationMatrix(1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xRmatrix,e);
            // res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            // console.log(res);
            // cubeXYZ[index] =res;
            // res=multv(pmatrix,res);
            // if (res[3]!=0){
            //   res[0] = res[0] / res[3];
            //   res[1] = res[1] / res[3];
            //   res[2] = res[2] / res[3];
            //   res[3]=res[3]/res[3];
            // }
            
            // console.log(res);
            cubeXYZ[index] =res;
            projected[index]=multv(pmatrix,res);
          });
        console.log(cubeXYZ);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
        
    }
    else if (e.keyCode == '40') {
        console.log("down")
        const ctx = canvas.getContext('2d');
        let xRmatrix=createXRotationMatrix(-1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xRmatrix,e);
            // res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            
            
            // console.log(res);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            // if (res[3]!=0){
            //   res[0] = res[0] / res[3];
            //   res[1] = res[1] / res[3];
            //   res[2] = res[2] / res[3];
            //   res[3]=res[3]/res[3];
            // }
            projected[index]=res;
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '37') {
        console.log("left")
        const ctx = canvas.getContext('2d');
        yRmatrix=createYRotationMatrix(-1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(yRmatrix,e);
            // res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            
            // console.log(res);
            cubeXYZ[index] =res;
            res=multv(pmatrix,res);
            // if (res[3]!=0){
            //   res[0] = res[0] / res[3];
            //   res[1] = res[1] / res[3];
            //   res[2] = res[2] / res[3];
            //   res[3]=res[3]/res[3];
            // }
            projected[index]=res;
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
        
    }
    else if (e.keyCode == '39') {
        console.log("right")
        const ctx = canvas.getContext('2d');
        yRmatrix=createYRotationMatrix(1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(yRmatrix,e);
            // res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            // if (res[3]!=0){
            //   res[0] = res[0] / res[3];
            //   res[1] = res[1] / res[3];
            //   res[2] = res[2] / res[3];
            //   res[3]=res[3]/res[3];
            // }
            
            console.log(res);
            cubeXYZ[index] =res;
            projected[index]=multv(pmatrix,res);
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '65') {
        console.log("a")
        const ctx = canvas.getContext('2d');
        let xTmatrix=xTranslationMatrix(-0.1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xTmatrix,e);
            // res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            // if (res[3]!=0){
            //   res[0] = res[0] / res[3];
            //   res[1] = res[1] / res[3];
            //   res[2] = res[2] / res[3];
            //   res[3]=res[3]/res[3];
            // }
            
            console.log(res);
            cubeXYZ[index] =res;
            projected[index]=multv(pmatrix,res);
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '68') {
        console.log("d")
        const ctx = canvas.getContext('2d');
        let xTmatrix=xTranslationMatrix(0.1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(xTmatrix,e);
            // res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            // if (res[3]!=0){
            //   res[0] = res[0] / res[3];
            //   res[1] = res[1] / res[3];
            //   res[2] = res[2] / res[3];
            //   res[3]=res[3]/res[3];
            // }
            
            console.log(res);
            cubeXYZ[index] =res;
            projected[index]=multv(pmatrix,res);
          });
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
            if (res[3]!=0){
              res[0] = res[0] / res[3];
              res[1] = res[1] / res[3];
              res[2] = res[2] / res[3];
              res[3]=res[3]/res[3];
            }
            
            console.log(res);
            
            projected[index]=multv(pmatrix,res);
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '83') {
        console.log("s")
        const ctx = canvas.getContext('2d');
        let yTmatrix=yTranslationMatrix(0.1);
        // rYmatrix=createYRotationMatrix(60);
        // rZmatrix=createZRotationMatrix(60);
        cubeXYZ.forEach((e,index) => {
            let res = multv(yTmatrix,e);
            // res = multv(pmatrix,res);
            // res=multv(rymatrix,res);
            // res=multv(rzmatrix,res);
            console.log(res);
            // if (res[3]!=0){
            //   res[0] = res[0] / res[3];
            //   res[1] = res[1] / res[3];
            //   res[2] = res[2] / res[3];
            //   res[3]=res[3]/res[3];
            // }
            
            console.log(res);
            cubeXYZ[index] =res;
            projected[index]=multv(pmatrix,res);
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
    else if (e.keyCode == '81') {
        console.log("q")
        const ctx = canvas.getContext('2d');
        let zTmatrix=zTranslationMatrix(-0.1);
        
        cubeXYZ.forEach((e,index) => {
            let res = multv(zTmatrix,e);
            cubeXYZ[index] =res;
            res==multv(pmatrix,res);
            if (res[3]!=0){
                res[0] = res[0] / res[3];
                res[1] = res[1] / res[3];
                res[2] = res[2] / res[3];
                res[3]=res[3]/res[3];
              }
            
            projected[index]=res;
          });
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
            res==multv(pmatrix,res);
            if (res[3]!=0){
                res[0] = res[0] / res[3];
                res[1] = res[1] / res[3];
                res[2] = res[2] / res[3];
                res[3]=res[3]/res[3];
              }
            
            projected[index]=res;
          });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCube(ctx,projected);
    }
}