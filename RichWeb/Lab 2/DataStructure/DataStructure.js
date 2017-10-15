
function main(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            splitData(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", "http://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
}

function splitData(data){
    var geoObject = [];
    var userArray =[];
    var address = [];
    var id = [];
    var idAdd = 0;
    for(i = 0;i<data.length;i++){
        geoObject.push(data[i].address.geo);
        userArray.push(new Array(data[i].name,data[i].id,data[i].company.name,data[i].address.zipcode));
        if(data[i].address.zipcode.charAt(0) === '5'){
            address.push(data[i].address.street);

        }
        id.push(data[i].id);
        idAdd += id[i]
    }
    var userName = data.map(function (user){
        return user.name;
    });

    console.log(userName);
    console.log(geoObject);
    console.log(userArray);
    console.log(address);
    console.log(idAdd);


}