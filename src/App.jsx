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
        // const { monsters } = this.state;
        return (

                <div className='App'>
                    <input type='search' placeholder="search monsters" />
                    <CardList monsters={this.state.monsters}>
                        
                    </CardList>

                </div>

        );
    }
}
