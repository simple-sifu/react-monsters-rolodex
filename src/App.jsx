import React, { Component } from 'react';
import { CardList } from './components/CardList';

export class App extends Component {

    constructor(){
        super();
        this.state = {
            monsters: [
            ],
            searchField: 'Hello Tommy'
        }
    }

    
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({monsters: users})
        })
    }

    render() {
        // const { monsters } = this.state;
        return (

                <div>
                    {this.state.monsters.map(monster => 
                        <h1 key={monster.id}>{monster.name}</h1>
                    )}
                </div>

        );
    }
}
