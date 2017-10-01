var limit = 5;
var sec = 0;

var x = setInterval(function() {
    var timer = limit - sec;
    document.getElementById("timer").innerHTML = timer;

    if(timer < 0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "TIMES UP!";
    }
    sec++;
}, 1000);