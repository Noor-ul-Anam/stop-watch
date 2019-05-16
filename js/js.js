// import moment = require("moment");
// import moment from "moment";

let counter=0;

// -- change button text--
let transformBtn = () => {
    let temp= document.getElementById('start');
    if(temp.innerHTML === 'Start'){
        temp.innerHTML = 'Stop';
        temp.style.color = '#289728';
        timer();
    }
    else if(temp.innerHTML === 'Stop'){
        temp.innerHTML = 'Start';
        temp.style.color = 'blueviolet'; 
        // ----- timer stop -----
        stopTimer();
    }
}

// ---- timer ---- 
let timer =() => {
    temp = setInterval(()=> {
        document.getElementById('time').innerHTML = moment().hour(0).minute(0).second(++counter).format('HH:mm:ss');
    },1000)
}

let stopTimer= () => {
    clearInterval(temp);
}

let resetTimer = ()=> {
    counter=0;
    transformBtn();
    document.getElementById('time').innerHTML = '00:00:00';
}