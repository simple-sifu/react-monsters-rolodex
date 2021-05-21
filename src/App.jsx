import React, { Component } from 'react';
import { CardList } from './components/CardList';
import './App.css';

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
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter( monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase()));
        console.log("filteredMonsters -", filteredMonsters)
        return (

                <div className='App'>
                    <input 
                        type='search' 
                        placeholder="search monsters" 
                        onChange={e => this.setState({searchField: e.target.value})}
                    />
                    <CardList monsters={filteredMonsters} />

                </div>

        );
    }
}
