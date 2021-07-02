import React, { Component } from 'react';

import {Navbar, Account, Home, Modal} from './partials/index';

class Dashboard extends Component {

    componentDidMount(){
        document.querySelector('title').innerText = 'ReactBank | Dashboard'
    }

    render(){
        let accountData = '';
        let userData ='';

        if(window.localStorage.getItem('userData')){
            let data = JSON.parse(window.localStorage.getItem('userData'));

            accountData = data.accountData;
            userData = data;
        }

        return(
            <div className="App">
                <div className="dashboard-container">
                    <Navbar />
                    <br />
                    <Home
                        accountData = {accountData}
                    />
                    <Account
                        userData = {userData}
                    />
                </div>
                <Modal
                    accountData = {accountData}
                />
            </div>
        )
    }
}

export default Dashboard;