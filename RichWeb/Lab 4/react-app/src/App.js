import React from 'react';
import axios from 'axios';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputValue: '',
            query: props.query,
            dropDown: 'people'
        };
    };

    componentWillUpdate(){
        axios({
            method:'get',
            baseURL:'https://swapi.co/api/',
            url: this.state.dropDown + '/?search=' + this.state.inputValue
        })
            .then(response => {
                let data = response.data.results.map(obj => obj);
                this.setState({data});

            });
    }

    updateInputValue(evt){
        this.setState({
            inputValue: evt.target.value
        });
    }

    updateDropdown(event){
        this.setState({
            dropDown: event.target.value
        });
        console.log(this.state.dropDown);
    }


    render() {
        const divStyle = {
            marginLeft: '25%',
            marginRight:'25%',
            height:'500px',

        };
        const divStyle1 = {
            textAlign: 'center'
        };
        return (
            <div style={divStyle}>
                <div style = {divStyle1}>
                    <input placeholder="Luke Skywalker" type = "text" onChange = {e => this.updateInputValue(e)}/>

                    <select onChange = {event => this.updateDropdown(event)}>
                        <option value = "people">People</option>
                        <option value = "films">Films</option>
                        <option value = "species">Species</option>
                        <option value = "vehicles">Vehicles</option>
                        <option value = "starships">Starships</option>
                        <option value = "planets">Planes</option>
                    </select>
                    <h1>{this.state.query}</h1>

                    <div>
                        {this.state.data.map((dynamicComponent) => <Content
                            desc = {dynamicComponent.name} data = {dynamicComponent}/>)}
                    </div>
                </div>
            </div>

        );
    }

}

class Content extends React.Component {

    render() {
        const divStyle = {
            webkitTextFillColor: 'white'
        };
        let data = Object.values(this.props.data);
        let desc = Object.keys(this.props.data);
        return (
            <div style = {divStyle}>

                <div>{desc[0]} : {data[0]}</div>
                <div>{desc[1]} : {data[1]}</div>
                <div>{desc[2]} : {data[2]}</div>
                <div>{desc[3]} : {data[3]}</div>
                <div>{desc[4]} : {data[4]}</div>
                <div>{desc[5]} : {data[5]}</div>
                <div>{desc[6]} : {data[6]}</div>

            </div>
        );
    }
}

export default App





























