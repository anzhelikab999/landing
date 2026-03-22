(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const countDown = new Date("Apr 10, 2026 23:59:59").getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        if (distance < 0) {
            document.getElementById("headline").innerText = "Акция!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
    }, 1000);
}());

var divToggleVis = document.getElementById('spoiler_text');
var button = document.getElementById('spoiler_button');

button.onclick = function() {
    if (divToggleVis.className === 'fadeout') {
        divToggleVis.className = 'fadein';
    } else {
        divToggleVis.className = 'fadeout';
    }

    if (button.innerHTML === 'узнать') {
        button.innerHTML = 'скрыть';
    } else {
        button.innerHTML = 'узнать';
    }
};