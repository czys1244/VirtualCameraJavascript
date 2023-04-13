function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        console.log("up")
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