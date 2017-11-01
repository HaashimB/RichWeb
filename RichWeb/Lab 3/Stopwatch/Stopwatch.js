import Rx from 'rxjs/Rx';


const digital = document.getElementById('digital');
const splitsList = document.getElementById('splits-list');

const source = Rx.Observable
    .interval(100 /* ms */ )
    .timeInterval();

let started = false;
let time = 0; // 1/10 seconds

const subscription = source.subscribe(
    x => {
        if(started){
            time++;
            //draw(time);
            digital.innerHTML = Math.floor(time / 600) + ":" + Math.floor((time / 10) % 60) + ":" + (time % 10) + "0";
        }

    });

Rx.Observable.fromEvent(document.getElementById('start'), 'click')
    .subscribe(e => {
        started = true;
    });

Rx.Observable.fromEvent(document.getElementById('stop'), 'click')
    .subscribe(e => {
        started = false;
    });

Rx.Observable.fromEvent(document.getElementById('split'), 'click')
    .subscribe(e => {
        splitsList.innerHTML += digital.innerHTML + "<br/>";
    });

Rx.Observable.fromEvent(document.getElementById('reset'), 'click')
    .subscribe(e => {
        started = false;
        time = 0;
        //draw(time);
        digital.innerHTML = "0:0:00";
        splitsList.innerHTML = "";
    });

const c = document.getElementById('canvas');
let ctx = c.getContext("2d");
let radius = c.height / 2;
ctx.translate(radius, radius );
radius = radius * 0.96;

window.setInterval(function(){
    drawClock();
}, 100);

function drawClock(){
    ctx.clearRect(-150,-150,300,300);
    ctx.beginPath();
    ctx.arc(0,0,radius,0, 2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = radius*0.02;
    ctx.stroke();

    drawCentre();
    drawIntervals();
    drawTime(ctx,radius);

}

function drawCentre(){

    ctx.beginPath();
    ctx.arc(0,0,radius*0.03,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

}
function drawIntervals(){

    let angle, angle1;
    let i,j;
    let num = 1;
    let num1 = 0.8;
    let num2 = num*2;
    let romanNumerals = ["0","i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x","xi", "xii"];
    ctx.font = radius*0.09 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for(i = 1; i < 13; i++){
        angle = i * Math.PI/6;
        ctx.rotate(angle);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-angle);
        ctx.fillText(romanNumerals[i].toUpperCase(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-angle);
    }
    for(j = 1; j < 60; j++) {
         if(j%5 !== 0){
             angle1 = j * (Math.PI *2/ 60);
             ctx.rotate(angle1);
             ctx.translate(0, -radius*0.85);
             ctx.rotate(-angle1);
             ctx.strokeStyle = "white";
             ctx.moveTo(num + num * Math.cos(angle1) * num1,num + num* Math.sin(angle1) * num1);
             ctx.lineTo(num + (num - num2) * Math.cos(angle1) * num1,num + (num - num2) * Math.sin(angle1) * num1);
             ctx.stroke();
             ctx.rotate(angle1);
             ctx.translate(0, radius*0.85);
             ctx.rotate(-angle1);
        }

    }


}
function drawTime(ctx, radius){
    let minute = time*0.00015;
    let second = time*0.1;
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.67, radius*0.03);
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.8, radius*0.01);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

