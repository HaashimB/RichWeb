
import Rx from 'rxjs/Rx';

let screen = false;
const calcButtons = document.getElementsByClassName("flex-item");
const button$ = Rx.Observable.from(calcButtons,'click')
    .map(btn =>  Rx.Observable.fromEvent(btn, 'click')
    .mapTo(btn.textContent))
    .mergeAll()
    .merge(Rx.Observable.fromEvent(document, 'keypress')
        .pluck('key'));
//document.getElementById('inputField').value = button$.textContent;

button$.subscribe(key => {
    if(screen){
        document.getElementById('inputField').value = key;
        screen = false;
    }else{
        screen = false;
    }
    if (key === 'C') {
        document.getElementById('inputField').value = 0;

    } else if (key === '=') {
        document.getElementById('inputField').value = eval(elem.value);
        screen = true;
    }
});
