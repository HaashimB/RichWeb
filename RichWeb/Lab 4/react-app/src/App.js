import React from 'react';
import axios from 'axios';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            inputValue: 'Luke Skywalker',
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
            marginLeft: '5%',
            marginRight:'5%',
            height:'100vh',
            style: 'flex',
            backgroundColor:'rgba(255, 255, 255, 0.3)',


        };
        const divStyle1 = {
            textAlign: 'center',
            opacity:'1.5'
        };
        const divImgStyle = {
            paddingTop:'1%',
            marginBottom:'1%',
            marginLeft: '37.5%',
        };
        const imgStyle = {
            width: '400px',
            height:'150px',
        };
        return (
            <div style={divStyle}>
                <div style = {divImgStyle}>
                    <img style = {imgStyle} src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/2000px-Star_Wars_Yellow_Logo.svg.png'/>
                </div>

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
            marginLeft: '3%',
            marginRight:'3%',
            display: 'flex',
            backgroundColor:'rgba(50, 50, 50, 0.7)',
            alignItems: 'center',
            justifyContent: 'center',
        };
        const divStyle1 = {
            flex: '1',
            height: '110px',
            overflowY: 'auto',
        };
        const h3Style1 = {
            textTransform: 'uppercase',
            borderColor: '#0ea4ef',
            borderTopStyle: 'solid',
            webkitTextFillColor: '#0970ef',
            fontFamily: 'Arial',

        };
        const h3Style2 = {
            borderBottomStyle: 'solid',
            borderColor: '#dd0d0d',
            webkitTextFillColor: '#dd0d0d',
            fontFamily: 'Arial',
        };
        let data = Object.values(this.props.data);
        let desc = Object.keys(this.props.data);
        return (
            <div style = {divStyle}>

                <div style = {divStyle1}><h3 style = {h3Style1}>{desc[0]}</h3><h3 style = {h3Style2}>{data[0]}</h3></div>
                <div style = {divStyle1}><h3 style = {h3Style1}>{desc[1]}</h3><h3 style = {h3Style2}>{data[1]}</h3></div>
                <div style = {divStyle1}><h3 style = {h3Style1}>{desc[2]}</h3><h3 style = {h3Style2}>{data[2]}</h3></div>
                <div style = {divStyle1}><h3 style = {h3Style1}>{desc[3]}</h3><h3 style = {h3Style2}>{data[3]}</h3></div>
                <div style = {divStyle1}><h3 style = {h3Style1}>{desc[4]}</h3><h3 style = {h3Style2}>{data[4]}</h3></div>
                <div style = {divStyle1}><h3 style = {h3Style1}>{desc[5]}</h3><h3 style = {h3Style2}>{data[5]}</h3></div>

            </div>
        );
    }
}

export default App





























