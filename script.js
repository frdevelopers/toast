let rawData = "Alarm Ringing";
let timer = 0;
let alarmsList = [];
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
function mytoast(rawData) {
    var toastHTML = `<span>${rawData}</span><button onclick="M.Toast.dismissAll();" class="btn-flat toast-action">Dismiss</button>`;
    M.toast({ html: toastHTML ,displayLength: 59000});
}
function liveClock() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    myClock.innerText = hr + " : " + min + " : " + sec;
    setTimeout(liveClock, 1000);

    //returning time in second, minutes and hours
    return {
        hr: hr,
        min: min,
        sec: sec
    };
}

function alarmInit() {

    clearTimeout(timer);
        //current time
        let currentTime = liveClock();
        //conditional statement
        alarmsList.forEach((item) => {
            if (currentTime.hr == item.hour && currentTime.min == item.min && currentTime.sec == 00) {
                
                mytoast(rawData,displayLength = 10000);
                
            } else{
                console.log("No Alarm");
            }
        })

    
    timer = setTimeout(alarmInit, 1000);
}
function setAlarm(evt) {
    let getTime = evt.target.parentElement.previousElementSibling.firstElementChild.value;
    let getName = evt.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.value;
    let getStatus = evt.target.parentElement.nextElementSibling;
    let getButton = evt.target;
    getButton.value = "Delete Alarm";
    getButton.onclick = function(){
        console.log("Alarm Deleted");//Yet Not Functional
    };
    //set status
    getStatus.innerText = "Pending";
    if (getTime == "" || 00) {
        return;
    } else {
        getTime = getTime.split(":");
        let hour = getTime[0].trim();
        let minute = getTime[1].trim();

        let alarmObj = {
            name: getName,
            hour: hour,
            min: minute
        }
        alarmsList.push(alarmObj);
        console.log(alarmObj);
        alarmInit();
    }
}