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
                    <CardList monsters={this.state.monsters}>
                        
                    </CardList>

                </div>

        );
    }
}
