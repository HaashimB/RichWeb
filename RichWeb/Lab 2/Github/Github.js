
var url = "";
var url1 = "";
function main(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                profileData(JSON.parse(xhttp.responseText));
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

    var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            repoData(JSON.parse(xhttp1.responseText));
        }
    };
    xhttp1.open("GET", url1, true);
    xhttp1.send();

}
function getUser(){
    var user = document.getElementById("in").value;
    if (user === null) {
        document.getElementById("error").innerHTML = "Please Enter UserName";
    }else{
        url = "https://api.github.com/users/" + user;
        url1 = "https://api.github.com/users/" + user + "/repos";

    }
    main();

}
function profileData(data){
    var avatar = data.avatar_url;
    var name = data.name;
    var user = data.login;
    var email = data.email;
    var location = data.location;
    var gistNo = data.public_gists;

    document.getElementById("pic").src = avatar;
    document.getElementById("profName").innerHTML = "Name: " + name;
    document.getElementById("profUser").innerHTML = "Username: " + user;
    document.getElementById("profEmail").innerHTML = "Email: " + email;
    document.getElementById("profLocation").innerHTML = "Location: " + location;
    document.getElementById("profGist").innerHTML = "Number of Gists: " + gistNo;

}
function repoData(data){
    var name = [];
    var desc = [];
    for(var i = 0;i<data.length;i++){
        name.push(data[i].name);
        desc.push(data[i].description);
    }
    for(i = 0;i<6;i++){
        document.getElementById("repo" + i).innerHTML
            = "Name: " + name[i] + "<br/>" + "Description:" + desc[i];
    }
}

