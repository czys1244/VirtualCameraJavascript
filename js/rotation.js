function createXRotationMatrix(fov){
    let rxmatrix = [
        [1, 0, 0, 0],
        [0, Math.cos((fov)*Math.PI/180), -Math.sin((fov)*Math.PI/180), 0],
        [0, Math.sin((fov)*Math.PI/180),Math.cos((fov)*Math.PI/180),0],
        [0, 0, 0, 1]
      ];
    return rxmatrix;
  }
  function createYRotationMatrix(fov){
    let rymatrix = [
        [Math.cos((fov)*Math.PI/180), 0, Math.sin((fov)*Math.PI/180), 0],
        [0, 1, 0, 0],
        [-Math.sin((fov)*Math.PI/180),0,Math.cos((fov)*Math.PI/180),0],
        [0, 0, 0, 1]
      ];
    return rymatrix;
  }