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
        .then(data => {
            this.setState({monsters: data})
        })
    }

    render() {

        return (

                <ul>
                {
                    this.state.monsters.map( monster => (
                        <h2 key={monster.id}> { monster.name }</h2>
                    ))
                }

                </ul>

        );
    }
}
