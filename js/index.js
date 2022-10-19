const player = document.getElementById("player");
const playerdown = document.getElementById("brown");  
let dx = 0;
let dy = 0;
let acceleration = 0.3;
let index = 1;



const draw = () => {
    if (dy != 0) {
        player.style.backgroundImage = `url('img/adventure_girl/png/Jump\ \(${index++}\).png')`;


    } else if (dx != 0) {
        player.style.backgroundImage = `url('img/adventure_girl/png/Run\ \(${index++}\).png')`;

    } else {
        player.style.backgroundImage = `url('img/adventure_girl/png/Idle\ \(${index++}\).png')`;
    }
    requestAnimationFrame(draw);
}
const animate=()=>{
    if (index > 10) index = 1;
    if ((player.offsetLeft + player.offsetWidth) > innerWidth) {
        dx = 0;
        player.style.left = `${innerWidth - player.offsetWidth}px`
    } else if (player.offsetLeft < 0) {
        dx = 0;
        player.style.left = '0';
    }

    dy += acceleration;
    if ((player.offsetTop + player.offsetHeight) > playerdown.offsetTop) {
        dy = 0;
        player.style.top = `${playerdown.offsetTop - player.offsetHeight}px`;
        acceleration = 0;
    }
    player.style.left = `${player.offsetLeft + dx}px`;
    player.style.top = `${player.offsetTop + dy}px`;
    requestAnimationFrame(animate);  // we are requesting from the browser to execute this function before doing the next repaint


}
addEventListener('keydown', ({ key }) => {


    if (key === 'ArrowRight') {
        index = 1;
        player.classList.remove('turn');
        dx = 10;


    } else if (key === 'ArrowLeft') {
        index = 1;
        player.classList.add('turn');
        dx = -10;

    }

});
addEventListener('keypress', ({ key }) => {
    if (key === ' ') {
        index = 1;
        dy = -10;
        acceleration = 0.3;
    }
})
addEventListener('keyup', ({ key }) => {
    if (key === 'ArrowRight' || 'ArrowLeft') {
        dx = 0;

    } else if (key === ' ') {
        dy = 0;
        acceleration = 0;
    }
});

requestAnimationFrame(draw);
requestAnimationFrame(animate);

// let j=0;
// let t1=0;
// const interval=1;


// function repaint(timestamp){  // time from the start to time till this frame execution
//     if (!t1) t1=timestamp;
//     const diff=timestamp-t1;
//     if(diff >= (interval *1000)){
//         t1=timestamp;
//         console.log('Painted '+j++);
//     }
//         requestAnimationFrame(repaint);

    
// }

// requestAnimationFrame(repaint);

// setInterval (()=>{
//     const cloud=document.getElementById("float");
//     cloud.offsetLeft=

// },10);