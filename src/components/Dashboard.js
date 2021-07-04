import React, { Component } from 'react';

import {Navbar, Account, Home, Modal} from './partials/index';

class Dashboard extends Component {

    componentDidMount(){
        document.querySelector('title').innerText = 'ReactBank | Dashboard'
    }

    render(){
        // let accountData = '';
        let userData ='';

        if(window.localStorage.getItem('userData')){
            let data = JSON.parse(window.localStorage.getItem('userData'));

            // accountData = data.accountData;
            userData = data;
        }

        return(
            <div className="App">
                <div className="dashboard-container">
                    <Navbar />
                    <br />
                    <Home
                        userData = {userData}
                    />
                    <Account
                        userData = {userData}
                    />
                </div>
                <Modal
                    userData = {userData}
                />
            </div>
        )
    }
}

export default Dashboard;