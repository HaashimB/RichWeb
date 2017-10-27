
import Rx from 'rxjs/Rx';


const btns = document.getElementsByClassName("flex-item");
const button$ = Observable.from(btns,'click')
    .map(btn =>  Observable.fromEvent(btn, 'click')
    .mapTo(btn.textContent))
    .mergeAll()
    .merge(Rx.Observable.fromEvent(document, 'keypress')
        .pluck('key'));
document.getElementById('inputField').value = button$.textContent;

button$.subscribe(key => {
    if (key === 'C') {
        document.getElementById('inputField').value = key;

    } else if (key === '=') {
        document.getElementById('inputField').value = eval(elem.value);
    }
});
