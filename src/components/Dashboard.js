import React, { Component } from 'react';

import {Navbar, Account, Home} from './partials/index';

class Dashboard extends Component {

    render(){
        let accountData = '';
        let userData ='';

        if(window.localStorage.getItem('userData')){
            let data = JSON.parse(window.localStorage.getItem('userData'));

            console.log(data)
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
            </div>
        )
    }
}

export default Dashboard;