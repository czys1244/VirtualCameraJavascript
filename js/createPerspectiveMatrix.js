function createPerspectiveMatrix(fov,aspect,znear,zfar){
    let pmatrix = [
        [aspect/Math.tan((fov/2)*Math.PI/180), 0, 0, 0],
        [0, 1/Math.tan((fov/2)*Math.PI/180), 0, 0],
        [0, 0, zfar/(zfar-znear), -zfar*znear/(zfar-znear)],
        [0, 0, 1, 0]
      ];
    return pmatrix;
}