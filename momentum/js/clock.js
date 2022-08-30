const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();    //호출할 때 시점의 시간
    const housrs = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${housrs}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


//padding 추가 padStart(길이, "0")  padEnd(길이, "0")
//"1".padStart(2, "0")