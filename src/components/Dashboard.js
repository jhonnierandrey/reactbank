import React, { Component } from 'react';

import {Navbar, Account, Home} from './partials/index';

class Dashboard extends Component {

    render(){
        let accountData = '';
        let userData ='';

        if(this.props.userData){
            accountData = this.props.userData.accountData;
            userData = this.props.userData;
        }

        return(
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
        )
    }
}

export default Dashboard;