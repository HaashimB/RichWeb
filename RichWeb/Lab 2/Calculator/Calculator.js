

//document.getElementsByTag("button").onclick='changeText()';

function changeText(x){

    var elem = document.getElementById("inputField");
    if(x === 'C'){
        document.getElementById('inputField').value = null;

    }else if(x === '=') {
        var a = eval(elem.value);
        document.getElementById('inputField').value = a;
    }else{
        elem.value += x;

    }


}