function drawCube(ctx, c) {
    let n = 4;
    for (let i = 0; i < n; i++) {
        connect(ctx, c, 0+i*8, 1+i*8);
        connect(ctx, c, 1+i*8, 2+i*8);
        connect(ctx, c, 2+i*8, 3+i*8);
        connect(ctx, c, 3+i*8, 0+i*8);
        connect(ctx, c, 0+i*8, 7+i*8);
        connect(ctx, c, 3+i*8, 4+i*8);
        connect(ctx, c, 2+i*8, 5+i*8);
        connect(ctx, c, 1+i*8, 6+i*8);
        connect(ctx, c, 4+i*8, 5+i*8);
        connect(ctx, c, 5+i*8, 6+i*8);
        connect(ctx, c, 6+i*8, 7+i*8);
        connect(ctx, c, 7+i*8, 4+i*8);
    }
    connect(ctx, c, 4*8, 4*8+1);
    // connect(ctx, c, 0, 1);
    // connect(ctx, c, 1, 2);
    // connect(ctx, c, 2, 3);
    // connect(ctx, c, 3, 0);
    // connect(ctx, c, 0, 7);
    // connect(ctx, c, 3, 4);
    // connect(ctx, c, 2, 5);
    // connect(ctx, c, 1, 6);
    // connect(ctx, c, 4, 5);
    // connect(ctx, c, 5, 6);
    // connect(ctx, c, 6, 7);
    // connect(ctx, c, 7, 4);

    // connect(ctx, c, 8, 9);
    // connect(ctx, c, 9, 10);
    // connect(ctx, c, 10, 11);
    // connect(ctx, c, 11, 8);
    // connect(ctx, c, 8, 15);
    // connect(ctx, c, 11, 12);
    // connect(ctx, c, 10, 13);
    // connect(ctx, c, 9, 14);
    // connect(ctx, c, 12, 13);
    // connect(ctx, c, 13, 14);
    // connect(ctx, c, 14, 15);
    // connect(ctx, c, 15, 12);


}