import React, {Component} from 'react';
import axios from 'axios';
import Auth from '../auth/Auth';
import styled from 'styled-components';

const List = styled.div`
    color: whitesmoke;
    font-weight: bold;
`;

class Jokes extends Component {
    state = {
        jokes:[]
    };

    render() {
        console.log('You are in the Jokes page!');
        return (
            <List>
                <h2>List of Jokes</h2>
                <ul>
                    {this.state.jokes.map(user => (
                        <li key={user.id}>{user.joke}</li>
                    ))}
                </ul>
            </List>
        )
    }
 componentDidMount() {
      axios.get('/api/jokes').then(res => {
            this.setState({ jokes: res.data })
        })   
    }    
}

export default Auth(Jokes);