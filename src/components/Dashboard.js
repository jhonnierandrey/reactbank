import React, { Component } from 'react';

import {Navbar, Account, Home, Modal} from './partials/index';

class Dashboard extends Component {

    state = {
        msg: '',
        userData: '',
        userTransactions: [],
    }

    getUserTransactions = () => {
        if(window.localStorage.getItem('userData')){
            
            // get user data
            const url = `${process.env.REACT_APP_API_URL}/api/account/transactions`;
            
            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(response => response.json())
            .then(result => {
                // checks if api is returning transactions
                if(result.msg === 'User transactions'){
                    // force user log out
                    this.setState({ userTransactions : result.userTransactions })
                }else{
                    localStorage.clear();
                    window.location.href = '/'
                }
            })
            // .then(result => this.setState({ userData : result.userData }))
            // .then(() => {
            //     window.localStorage.setItem('userData', JSON.stringify(this.state.userData))
            //     window.location.href = '/dashboard'
            // })
        }else{
            // force user log out
            localStorage.clear();
            window.location.href = '/'
        }
    }

    withdrawalMoney = (e) => {
        e.preventDefault()
        let wdwAmount = document.querySelector('#withdrawal').value
        let msgBox = document.querySelector('.wdw-msg')

        if(wdwAmount <= 0){
            msgBox.innerText = 'Please enter a valid amount.'
            return;
        }else{
            // if quick check is passed, withdrawal end point to process the request
            const url = `${process.env.REACT_APP_API_URL}/api/account/wdw`;

            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache': 'no-cache'
                },
                body: new URLSearchParams({
                    withdrawal: wdwAmount,
                })
            })
            .then(response => response.json())
            .then(result => {
                if(result.msg === 'Withdrawal completed'){
                    this.setState({ userData : result.userData })
                    window.localStorage.setItem('userData', JSON.stringify(this.state.userData))
                    msgBox.style.color = '#00FF00';
                    msgBox.innerText = 'Withdrawal completed';
                    this.getUserTransactions()
                }else{
                    msgBox.innerText = result.msg
                }
            })
        }
    }

    componentDidMount(){
        document.querySelector('title').innerText = 'ReactBank | Dashboard'

        if(window.localStorage.getItem('userData')){
            let data = JSON.parse(window.localStorage.getItem('userData'));

            // accountData = data.accountData;
            // userData = data;
            this.setState({ userData : data });
        }

        this.getUserTransactions()
    }

    render(){

        return(
            <div className="App">
                <div className="dashboard-container">
                    <Navbar />
                    <br />
                    <Home
                        userData = {this.state.userData}
                        userTransactions = {this.state.userTransactions}
                    />
                    <Account
                        userData = {this.state.userData}
                    />
                </div>
                <Modal
                    withdrawal = {this.withdrawalMoney}
                    userData = {this.state.userData}
                />
            </div>
        )
    }
}

export default Dashboard;