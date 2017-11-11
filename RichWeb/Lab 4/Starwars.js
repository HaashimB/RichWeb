import React from 'react';
import ReactDOM from 'react-dom';
//import Rx from 'rxjs/Rx';
import axios from 'axios';


const App = () => <h1>Hello</h1>;

ReactDOM.render(

  <App />,
  document.getElementById('root')
);








// let query;
// Rx.Observable.fromEvent(document.getElementById('btn'), 'click')
//     .subscribe(search => {
//         query =  document.getElementById('inputField').value;
//         axios.get('https://swapi.co/api/' + document.getElementById('inputField').value)
//             .then(function (response) {
//                 console.log(response);
//                 document.getElementById("starwars").innerHTML = response.data.title;
//
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     });


// axios.get('https://swapi.co/api/films')
//     .then(function (response) {
//         console.log(response);
//         document.getElementById("starwars").innerHTML = response.data.count;
//
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// let filmTitles = [];
// for(let i = 1;i<8;i++){
//     axios({
//         method:'get',
//         baseURL:'https://swapi.co/api',
//         url:'films/' + i,
//     })
//         .then(function(response) {
//             filmTitles.push(response.data.title);
//             if(filmTitles.get(i) === query){
//                 let data = response.data;
//                 print(data);
//             }
//         });
//
// }

// function print(d){
//     document.getElementById("starwars").innerHTML = d.title;
// }
// let attr = 'films/2';
// axios({
//     method:'get',
//     baseURL:'https://swapi.co/api',
//     url:attr
// })
//     .then(function(response) {
//         document.getElementById("starwars").innerHTML = response.data.title;
//     });