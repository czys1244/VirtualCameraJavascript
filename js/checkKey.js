function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        console.log("up")
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
    }
    else if (e.keyCode == '40') {
        console.log("down")
        
        
    }
    else if (e.keyCode == '37') {
        console.log("left")
        
    }
    else if (e.keyCode == '39') {
        console.log("right")
    }

}