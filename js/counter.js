/**
 * Created by obi on 2017-04-29.
 */

var isCounting = false;
var counterRef;

var Counter = (function() {
    var counter = 0;
    return function() {
        return counter += 1;
    }
})();

function count() {
    document.querySelector("#currentCount").textContent = Counter();
}

function toggleAutoCounter() {
    if(!isCounting) {
        startCounter();
        isCounting = !isCounting;
        document.querySelector("#btnCount").textContent = "Pause Counter!";
    } else {
        stopCounter(counterRef);
        isCounting = !isCounting;
        document.querySelector("#btnCount").textContent = "Resume Counter!"
    }
}

function startCounter() {
    if(isCounting) {
        stopCounter(counterRef)
    } else {
        counterRef = setInterval(count, 1000);
    }
}

function stopCounter(_ref2Counter) {
    if(isCounting) {
        clearInterval(_ref2Counter);
    }
}