import Rx from 'rxjs/Rx';
import axios from 'axios';


axios.get('https://swapi.co/api/films/2/')
    .then(function (response) {
        console.log(response);
        document.getElementById("starwars").innerHTML = response.data.title;

    })
    .catch(function (error) {
        console.log(error);
    });

