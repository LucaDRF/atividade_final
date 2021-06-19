function startTimer(duration, display1, display2) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display1.innerHTML = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            var cupom = geradorCupom(8);
    display2.innerHTML = cupom;
        }
    }, 1000);
    
}
function geradorCupom(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   localStorage.setItem('Cupom', result.join(''));
   return result.join('');
}
window.onload = function (){    
    var duration = 60 * 10;
    var display1 = document.getElementById("cronometro");
    var display2 = document.getElementById("cupom");
    startTimer(duration, display1, display2);
    var cupom = geradorCupom(8);
    display2.innerHTML = cupom; 
}
