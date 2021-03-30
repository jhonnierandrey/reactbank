import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import './App.css';
import nameLogo from './images/reactBank.png';

import { Apply, About, Dashboard, Login, Modal} from "./components/index";

class App extends Component {

    state = {
        username : '',
        msg: '',
        userData: [],
    }
    
    showLogin = (e) => {
        e.preventDefault();

        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".login-form").style.display = 'flex';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".about").style.display = 'none';
    }

    showApply = (e) => {
        e.preventDefault();

        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'flex';
        document.querySelector(".about").style.display = 'none';
    }

    showAbout = (e) => {
        e.preventDefault();

        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".about").style.display = 'flex';
    }

    showModal = (e) =>{
        e.preventDefault();

        document.querySelector(".modal-container").style.display = 'flex';
        // document.querySelector(".login-form").style.display = 'none';
    }

    showDashboard = (e) => {
      e.preventDefault();

      document.querySelector(".login-form").style.display = 'none';
      document.querySelector(".App-header").style.display = 'none';
      document.querySelector(".apply-form").style.display = 'none';
      document.querySelector(".about").style.display = 'none';
      document.querySelector(".dashboard-container").style.display = 'initial';
    }

    callapi = (username, password) => {
        document.querySelector(".modal-container").style.display = 'flex';

        const url = "https://reactbank-back-end.herokuapp.com/api/login/";

        this.setState(
            {username : username}
        )

        fetch(url, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            })
            }
        )
        .then(response => response.json())
        .then(result => this.setState({ msg : result.msg }))
        .then(this.verifyLogin)
    }

    verifyLogin = () => {
        if(this.state.msg === 'User Logged In'){
            // get user data
            console.log("Information is correct.")

            const cookies = new Cookies();
            cookies.set('currentUser', this.state.username, {path: '/'});
            // window.location.href='./dashboard';

            console.log(cookies.get('currentUser'))

            const url = "https://reactbank-back-end.herokuapp.com/api/account";

            fetch(url,{
                method: 'GET',
                credentials: "include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(result => console.log(result))
            // .then(result => this.setState({images : result.hits}))
            // .then(this.scrollDown) 
            // remove modal
            // move to dashboard
        }else{
            console.log("Information is incorrect.")
        }
    }

    render() {

        return (
            <div className="App">
                <Login
                    callapi = {this.callapi}
                    showApply = {this.showApply}
                    showAbout = {this.showAbout}
                />

                <Apply
                    showLogin = {this.showLogin}
                    showAbout = {this.showAbout}
                />

                <About
                    showLogin = {this.showLogin}
                    showApply = {this.showApply}
                />

                <Dashboard />

                <header className="App-header">
                    <img src={nameLogo} alt='Logo'/>
                    <h3>welcome back.</h3>
                    
                    <button onClick={this.showLogin} type="button" className="btn btn-primary">Login</button>
                    <button onClick={this.showDashboard} type="button" className="btn btn-primary">TEST</button>
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