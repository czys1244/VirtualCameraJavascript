function zoom(x) {
    a=fov+x;
    if (a<160 && a>10){
        fov=a;
        pmatrix=createPerspectiveMatrix(fov,aspect,znear,zfar);
    }
}