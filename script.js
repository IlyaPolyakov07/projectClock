const WEEK = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

function updateTime() {
    var now = new Date();
    
    const hours = zeroPadding(now.getHours(), 2);
    const minutes = zeroPadding(now.getMinutes(), 2);
    const seconds = zeroPadding(now.getSeconds(), 2);
    
    document.getElementById("time").innerHTML = 
        `${hours}<span class="pulse">:</span>${minutes}<span class="pulse">:</span>${seconds}`;

    document.getElementById("date").innerText =
        now.getFullYear()+ "-" +
        zeroPadding(now.getMonth() + 1, 2)+ "-" +
        zeroPadding(now.getDate(), 2)+ " " +
        WEEK[now.getDay()];
}

function zeroPadding(num,digit) {
    return String(num).padStart(digit, '0');
}

// Запускаем часы после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000);
});
