import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './login/sign_in';
import Register from './register/sign_up';
import Users from './users/users_list';
import Jokes from './jokes/jokes_list';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <header> 
          <nav>
            <button><NavLink className='link' to="/Register">Register</NavLink></button>
            &nbsp;|&nbsp;
            <button><NavLink className='link' to="/login">Login</NavLink></button>
            &nbsp;|&nbsp;
            <button className='link' onClick={this.logout}>Logout</button>
            &nbsp;|&nbsp;
            <button><NavLink className='link' to="/jokes">Jokes</NavLink></button>
            &nbsp;|&nbsp;
            <button><NavLink className='link' to="/users">Users</NavLink></button>
          </nav>
        </header>
        <main>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
          <Route path="/users" component={Users} />
        </main>
      </div>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt')
    this.props.history.push('/login')
  }
}


export default withRouter(App);