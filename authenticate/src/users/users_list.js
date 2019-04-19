import React, {Component} from 'react';
import axios from 'axios';
import Auth from '../auth/Auth';
import styled from 'styled-components';

const List = styled.div`
    color: whitesmoke;
    font-weight: bold;
    line-height: .5;
`;

class Users extends Component {
    state = {
        users:[]
    };

    render() {
        console.log('You are in the Users page!');
        return (
            <List>
                <h2>List of Users</h2>
                <p>
                    {this.state.users.map(user => (
                        <p key={user.id}>{user.username}</p>
                    ))}
                </p>
            </List>
        )
    }
 componentDidMount() {
      axios.get('/api/users').then(res => {
            this.setState({ users: res.data })
        })   
    }    
}

export default Auth(Users);