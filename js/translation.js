function xTranslationMatrix(x) {
    let rxmatrix = [
        [1, 0, 0, x],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];
    return rxmatrix;
}

function yTranslationMatrix(y) {
    let rymatrix = [
        [1, 0, 0, 0],
        [0, 1, 0, y],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ];
    return rymatrix;
}

function zTranslationMatrix(z) {
    let rzmatrix = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, z],
        [0, 0, 0, 1]
    ];
    return rzmatrix;
}