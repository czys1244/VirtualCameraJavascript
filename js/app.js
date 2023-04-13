const canvas = document.querySelector('#canvas');
if (canvas.getContext) {
    addEventListener("keydown", (event) => { });
    document.onkeydown = checkKey;
    const ctx = canvas.getContext('2d');
    drawLine(ctx, [0, 0], [500, 400]);
    drawLine(ctx, [500, 0], [0, 400]);
}
