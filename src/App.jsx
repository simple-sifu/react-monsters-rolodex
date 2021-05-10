import React, { Component } from 'react';

export class App extends Component {

    constructor(){
        super();
        this.state = {
            monsters: []
        }
    }


    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({monsters: data}));

    }

    render() {
        return (
            <div>
                <h1>Welcome { new Date().toString() } </h1>
            </div>
        );
    }
}
