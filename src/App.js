import React, { Component } from 'react';
// import Cookies from 'universal-cookie'; will be implemented soon.

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

        const url = "https://reactbank-back-end.herokuapp.com/api/login/";
        // localStorage.setItem("token", "value")

        fetch(url, {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            })
        })
        .then(response => response.json())
        .then(result => this.setState({ msg : result.msg, token : result.token }))
        .then(this.verifyLogin)
    }
    
    verifyLogin = () => {
        if(this.state.msg === 'User Logged In'){
            // future-feature 
            // const cookies = new Cookies();
            // cookies.set('currentUser', this.state.username, {path: '/'});
            
            // get user data
            const url = "https://reactbank-back-end.herokuapp.com/api/account";
            
            fetch(url, {
                method: 'GET',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'token' : this.state.token
                }
            })
            .then(response => response.json())
            .then(result => this.setState({ userData : result.userData }))
            .then(this.saveUSER)
        }else{
            // hide modal & show login screen + errors
            document.querySelector(".modal-container").style.display = 'none';
            document.querySelector(".form-errors").style.display = 'initial';
            document.querySelector(".form-errors").innerHTML = this.state.msg;
        }
    }

    saveUSER = () => {
        window.localStorage.setItem('userData', JSON.stringify(this.state.userData))
        window.location.href = '/dashboard'
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