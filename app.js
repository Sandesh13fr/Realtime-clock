let time = document.getElementById("time")
setInterval(() => {
    const clock = new Date();
    let timeStr =clock.toLocaleTimeString("default",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    })
    let realTime = `${timeStr.replace("PM","")}`
    time.textContent=`${realTime}`
}, 1000);
