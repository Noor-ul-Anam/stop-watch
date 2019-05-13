

// -- change button text--
let transformBtn = () => {
    let temp= document.getElementById('start');
    if(temp.innerHTML === 'Start'){
        temp.innerHTML = 'Stop';
        temp.style.color = '#289728';
        console.log('duh');
    }
    else if(temp.innerHTML === 'Stop'){
        temp.innerHTML = 'Start';
        temp.style.color = 'blueviolet';        
    }
}


let startTimer = () => {
    
}

