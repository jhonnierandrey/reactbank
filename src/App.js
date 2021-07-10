import React, { Component } from 'react';

import './App.css';
import nameLogo from './images/reactBank.png';

import { Apply, About, Login, Modal} from "./components/index";

// custom functions to modify viewport.
import show from './scripts'

class App extends Component {

    state = {
        token : '',
        msg: '',
        userData: '',
    }

    callapi = (username, password) => {
        document.querySelector(".modal-container").style.display = 'flex';

        const url = `${process.env.REACT_APP_API_URL}/api/login`;

        // login user and getting user data
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                email: username,
                password: password,
            })
        })
        .then(response => response.json())
        .then(result => {
            if(result.msg === 'User Logged In'){
                // get user data
                const url = `${process.env.REACT_APP_API_URL}/api/account`;
                
                fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })
                .then(response => response.json())
                .then(result => {
                    if(result.msg === 'User data'){
                        this.setState({ userData : result.userData })
                        window.localStorage.setItem('userData', JSON.stringify(this.state.userData))
                        window.location.href = '/dashboard'
                    }else{
                        document.querySelector(".modal-container").style.display = 'none';
                        document.querySelector(".form-errors").style.display = 'initial';
                        document.querySelector(".form-errors").innerHTML = result.msg;
                    }
                })
            }else{
                // hide modal & show login screen + errors
                document.querySelector(".modal-container").style.display = 'none';
                document.querySelector(".form-errors").style.display = 'initial';
                document.querySelector(".form-errors").innerHTML = result.msg;
            }
        })
    }

    createUserApi = (name, lastName, username, password, confirmation, ) => {
        document.querySelector(".modal-container").style.display = 'flex';

        const url = `${process.env.REACT_APP_API_URL}/api/register`;

        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache': 'no-cache'
            },
            body: new URLSearchParams({
                name: name,
                lastName: lastName,
                email: username,
                password: password,
                confirmation: confirmation,
            })
        })
        .then(response => response.json())
        .then(result => {
            if(result.msg === 'User created'){
                document.querySelector(".modal-container").style.display = 'none';
                document.querySelector('.apply-form-errors').style.display = 'initial';
                let formErrors = document.querySelector('.apply-form-errors').querySelector('ul');

                formErrors.innerHTML = `<li style="color: #00FF00">${result.msg}, you are being redirected to login...</li>`;
                setTimeout(() => {
                    show.login()
                }, 3000)
            }else{
                document.querySelector(".modal-container").style.display = 'none';
                document.querySelector('.apply-form-errors').style.display = 'initial';
                let formErrors = document.querySelector('.apply-form-errors').querySelector('ul');

                formErrors.innerHTML = `<li>${result.msg}</li>`;
            }
        })
    }

    render() {
        return (
            <div className="App">
                <Login
                    callapi = {this.callapi}
                    showApply = {show.apply}
                    showAbout = {show.about}
                />

                <Apply
                    createUserApi = {this.createUserApi}
                    showLogin = {show.login}
                    showAbout = {show.about}
                />

                <About
                    showLogin = {show.login}
                    showApply = {show.apply}
                />

                {/* <Dashboard
                    userData = {this.state.userData}
                /> */}

                <header className="App-header">
                    <img src={nameLogo} alt='Logo'/>
                    <h3>welcome back.</h3>
                    
                    <button onClick={show.login} type="button" className="btn btn-primary">Login</button>
                </header>

                <div className='screen-alert'>
                    <img src={nameLogo} alt='Logo'/>
                    <h3>will be available soon on Desktop.</h3>        
                </div>

                <Modal />
            </div>
        );
    }
}

export default App;