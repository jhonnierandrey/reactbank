import React, { Component } from 'react';

import {Navbar, Account, Home} from './partials/index';

class Dashboard extends Component {

    render(){
        return(
            <div className="dashboard-container">
                <Navbar />
                <br />
                <Home />
                <Account />
            </div>
        )
    }
}

export default Dashboard;