import React, { Component } from 'react';
import Users from '../users';
import SearchBox from '../searchBox';
import Modal from '../modal';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Users</h1>
                <SearchBox />
                <Users />
                <Modal />
            </div>
        )
    }
}

export default App;