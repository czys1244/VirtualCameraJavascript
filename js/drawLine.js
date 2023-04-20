function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }
    a = [(begin[0]+1)*400, (begin[1]+1)*250];
    b = [(end[0]+1)*400, (end[1]+1)*250];
    
    ctx.beginPath();
    ctx.moveTo(...a);
    ctx.lineTo(...b);
    ctx.stroke();
}