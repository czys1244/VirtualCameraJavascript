function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}
const canvas = document.querySelector('#canvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    drawLine(ctx, [0, 0], [500, 400]);
    drawLine(ctx, [500, 0], [0, 400]);
}
