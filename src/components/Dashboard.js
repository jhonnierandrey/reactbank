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
                    'Cache': 'no-cache'
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

    depositMoney = (e) => {
        e.preventDefault()
        let msgBox = document.querySelector('.dpst-msg')
        let currentBalance = this.state.userData.balance
        
        if(Number(currentBalance.replace(/[^0-9.-]+/g,"")) > 250){
            msgBox.innerText = 'You can reset your balance when is below $250'
            return;
        }else{
            // if quick check is passed, deposit end point will be called to process the request
            const url = `${process.env.REACT_APP_API_URL}/api/account/deposit`;

            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache': 'no-cache'
                }
            })
            .then(response => response.json())
            .then(result => {
                if(result.msg === 'Balance updated'){
                    this.setState({ userData : result.userData })
                    window.localStorage.setItem('userData', JSON.stringify(this.state.userData))
                    msgBox.style.color = '#00FF00';
                    msgBox.innerText = 'Balance updated';
                    this.getUserTransactions()
                }else{
                    msgBox.innerText = result.msg
                }
            })
        }
    }

    transferMoney = (e) => {
        e.preventDefault()
        let receptor = document.querySelector('#transfer-email').value
        let transferAmount = document.querySelector('#transfer-amount').value

        let msgBox = document.querySelector('.trsf-msg')

        let currentBalance = this.state.userData.balance

        if(transferAmount <= 0 || receptor.length <= 0){
            msgBox.innerText = 'Email and amount are required.'
            return;
        }else if(Number(currentBalance.replace(/[^0-9.-]+/g,"")) < transferAmount){
            msgBox.innerText = 'Not enough money.'
            return;
        }else{
            // if quick check is passed, transfer end point is called to process the request
            const url = `${process.env.REACT_APP_API_URL}/api/account/transfer`;

            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache': 'no-cache'
                },
                body: new URLSearchParams({
                    email: receptor,
                    transfer : transferAmount
                })
            })
            .then(response => response.json())
            .then(result => {
                if(result.msg === 'Transfer completed'){
                    this.setState({ userData : result.userData })
                    window.localStorage.setItem('userData', JSON.stringify(this.state.userData))
                    msgBox.style.color = '#00FF00';
                    msgBox.innerText = 'Transfer completed';
                    this.getUserTransactions()
                }else{
                    msgBox.innerText = result.msg
                }
            })
        }
    }

    accountUpdate = (e) => {
        e.preventDefault()
        let password = document.querySelector('#password').value
        let passwordNew = document.querySelector('#password-new').value
        let confirmation = document.querySelector('#confirmation').value

        let msgBox = document.querySelector('.usrup-msg')

        // let currentBalance = this.state.userData.balance

        
        if(passwordNew !== confirmation){
            msgBox.innerText = 'New passwords do not match.'
            return;
        }else{
            // if quick check is passed, account update end point is called to process the request
            const url = `${process.env.REACT_APP_API_URL}/api/account/update`;

            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cache': 'no-cache'
                },
                body: new URLSearchParams({
                    password : password,
                    passwordNew : passwordNew,
                    confirmation : confirmation,
                })
            })
            .then(response => response.json())
            .then(result => {
                if(result.msg === 'The password has been updated'){
                    msgBox.style.color = '#00FF00';
                    msgBox.innerText = 'The password has been updated';
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
                    depositMoney = {this.depositMoney}
                    withdrawal = {this.withdrawalMoney}
                    transfer = {this.transferMoney}
                    accountUpdate = {this.accountUpdate}
                    userData = {this.state.userData}
                />
            </div>
        )
    }
}

export default Dashboard;