import React, { Component } from 'react';
import { CardList } from './components/CardList';

export class App extends Component {

    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ''
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
        const { monsters } = this.state;
        return (

                <div>
                    <h1> Monsters Rolodex </h1>
                    <CardList monsters={monsters}/>
                </div>

        );
    }
}
