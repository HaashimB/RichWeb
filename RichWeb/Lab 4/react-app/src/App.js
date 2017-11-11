import React from 'react';
//import Rx from 'rxjs/Rx';
import axios from 'axios';




class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            query: props.query
        };
    }
    componentWillUpdate(){
        axios({
            method:'get',
            baseURL:'https://swapi.co/api/',
            url: 'people/?search=' + this.state.query
        })
            .then(response => {
                let data = response.data.results.map(obj => obj);
                console.log(data);
                this.setState({data});

            });
    }

    update(e){
        this.setState({query: e.target.value})
    }
    render(){
        // return React.createElement('h1',null,'EGG BOY')
        //console.log(data);


        return(
            <div>
                <input id = "query"  type = "text" placeholder = "Luke Skywalker"/>
                <button onClick ={ this.update.bind(this) }>Search</button>
                <h1>{this.state.query}</h1>
                <ul>
                    {this.state.data.map(post =>
                        <li>{post.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}


export default App
