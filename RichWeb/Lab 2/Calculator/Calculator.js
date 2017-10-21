

//document.getElementsByTag("button").onclick='changeText()';

function changeText(x){

    var elem = document.getElementById("inputField");
    if(x === 'C'){
        document.getElementById('inputField').value = null;

    }else if(x === '=') {
        document.getElementById('inputField').value = eval(elem.value);
    }else{
        elem.value += x;
    }


}