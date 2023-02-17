let droticFlag = false;
let box = document.querySelector('.box'),
    drotic = document.querySelector('.drotic');
let distanceY = 0,
    distanceX = 0;


drotic.addEventListener('mousedown', () => {
    droticFlag = true;
    drotic.style.transition = 'none'
})

box.addEventListener('mousemove', (e) => {
    if (e.pageY >= window.innerHeight/2 && droticFlag) {
        drotic.style.top = e.pageY + 'px';
        drotic.style.left = e.pageX - 50 + 'px';
        distanceY = window.innerHeight - e.pageY;
        distanceX = window.innerWidth - e.pageX - 50;
       if (e.pageX <= window.innerWidth/2 - 100) drotic.style.transform = "rotate(-90deg)";
       else if(e.pageX >= window.innerWidth/2 + 100) drotic.style.transform = "rotate(-180deg)";
       else drotic.style.transform = "rotate(-120deg)";
    }
})

drotic.addEventListener('mouseup', () => {
    drotic.style.transition = '0.3s ease-out';
    droticFlag = false;
    drotic.style.top = distanceY + 'px';
    drotic.style.left = distanceX + 'px';
})