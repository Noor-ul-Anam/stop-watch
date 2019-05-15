// import moment = require("moment");
// import moment from "moment";

// ideas:
// 1. arrays and nested set interval 
// 2. date functions with moment
// 3. setinterval and setTimeout

let timeString = ['00','00','00'];

// -- change button text--
let transformBtn = () => {
    let temp= document.getElementById('start');
    if(temp.innerHTML === 'Start'){
        temp.innerHTML = 'Stop';
        temp.style.color = '#289728';
        console.log(timeString);
        timer();
    }
    else if(temp.innerHTML === 'Stop'){
        temp.innerHTML = 'Start';
        temp.style.color = 'blueviolet'; 
        // ----- timer stop -----
        timer();
    }
}
let timer= () => {
    // ---------timer start--------
    // if(text === 'Stop'){
    let h= moment().format('hh'); // hour at start of timer
    let m= moment().format('mm'); // minute at start of timer
    let s= moment().format('ss'); // second at start of timer
    temp1 = setInterval(() => {
        let h1= moment().format('hh'); // current hour
        let m1= moment().format('mm');  // current minute
        let s1= moment().format('ss');  // current second
        // --- timer start ---
        let time = moment({hour:`${h1-h}`, minute: `${m1-m}`, second:`${s1-s}`}).format('HH:mm:ss');
        console.log(time);
        document.getElementById('time').innerHTML = time;

        // let hourValue = moment({hour:`${h1-h}`}).format('HH');
        // document.getElementById('hour').innerHTML = hourValue;
        // let minuteValue = moment({minute:`${m1-m}`}).format('mm');
        // document.getElementById('minute').innerHTML = minuteValue;
        // let secondValue = moment({second:`${s1-s}`}).format('ss');
        // document.getElementById('second').innerHTML = secondValue;
        // for (let index = 0; index < 3; index++) {
        //     timeString.pop();
        // }
        // timeString.push(hourValue, minuteValue, secondValue);
        //  console.log(timeString);
        },1000)
    // }else if(text === 'Start'){
    //     return false;
    // }
    // clearInterval(temp1); // timer stops and time string has the current time stored
}

// let timer= (text) => {
//     // ---------timer start--------
//     let h= moment().format('hh'); // hour at start of timer
//     let m= moment().format('mm'); // minute at start of timer
//     let s= moment().format('ss'); // second at start of timer
//      let promise = new Promise((resolve, reject) => {
//          text === 'Stop'? resolve(): reject();
//      }).then(()=> {
//         temp1 = setInterval(() => {
//         let h1= moment().format('hh'); // current hour
//         let m1= moment().format('mm');  // current minute
//         let s1= moment().format('ss');  // current second
//         // --- timer start ---
//         let hourValue = moment({hour:`${h1-h}`}).format('HH');
//         document.getElementById('hour').innerHTML = hourValue;
//         let minuteValue = moment({minute:`${m1-m}`}).format('mm');
//         document.getElementById('minute').innerHTML = minuteValue;
//         let secondValue = moment({second:`${s1-s}`}).format('ss');
//         document.getElementById('second').innerHTML = secondValue;
//         for (let index = 0; index < 3; index++) {
//             timeString.pop();
//         }
//         timeString.push(hourValue, minuteValue, secondValue);
//          console.log(timeString);
//         },1000)
//      }).catch(()=> {
//         clearInterval(temp1); // timer stops and time string has the current time stored
//      });
// }

// --- start timer without reset ---
// let ResumeTimer = () => {
//     let hourValue = moment({hour:`${h1-h}`}).format('HH');
//     document.getElementById('hour').innerHTML = hourValue;
//     let minuteValue = moment({minute:`${m1-m}`}).format('mm');
//     document.getElementById('minute').innerHTML = minuteValue;
//     let secondValue = moment({second:`${s1-s}`}).format('ss');
//     document.getElementById('second').innerHTML = secondValue;
    
//     let time = moment(`${'timeString'}`).format('HH:mm:ss');
//     console.log(time);
// }


// // ------------------------




// // working with dates 
// let d = new Date('2015-03-25T12:00:00Z');
// let d2 = new Date() ;
// let a =d2.setHours(00);
// let b =d2.setMinutes(00);
// let c =d2.setSeconds(00);
// console.log();
// console.log(a +b +c); 
// console.log(d2.getHours());
// console.log(d2.getMinutes());
// console.log(d2.getSeconds());
// console.log(d.toTimeString());
// console.log(d);

// let d1 =d.getTime();
// console.log(d.toTimeString());
// console.log(d1);



