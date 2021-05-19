var pos = 1;
var isRunning = 0;
function counter(a) {
    if (isRunning) { return }
    isRunning = 1;
    prevPos = pos;
    pos = a;
    if (pos > 5) { pos = 5 };
    if (pos < 1) { pos = 1 };
    const shortText = document.querySelectorAll('.progress__shortText');
    const barControl = document.querySelectorAll('.progress__bar_start');
    const btns = document.querySelectorAll('.progress__icon');
    const blocks = document.querySelectorAll('.progress__price');
    for (let k = 0; k < btns.length; k += 1) {
        btns[k].style.backgroundColor = "aliceblue";
        btns[k].style.color = "#37b2ed";
        blocks[k].style.display = "none";
        shortText[k].style.color = "#11557a";
    }
    var latency = 500,
        k = prevPos,
        numIterations = pos;

    var loop = function () {

        if (k < numIterations) {
            barControl[k - 1].style.width = "100%";
            k += 1;

            setTimeout(loop, latency);
        }
        else if (k > numIterations) {
            barControl[k - 2].style.width = "0%";
            k -= 1;

            setTimeout(loop, latency);
        }
        else {
            isRunning = 0;
        }
    }
    loop()
    shortText[pos - 1].style.color = "aliceblue";
    btns[pos - 1].style.backgroundColor = "#37b2ed";
    btns[pos - 1].style.color = "aliceblue";
    blocks[pos - 1].style.display = "flex";
};