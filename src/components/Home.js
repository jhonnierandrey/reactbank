import React, { Component } from 'react';
import nameLogo from '../images/reactBank.png';

import Apply from './Apply';
import About from './About';

class Home extends Component {

    state = {
        msg: "",
        userData: []
    }

    usernameInput = React.createRef();
    passwordInput = React.createRef();
    
    showLogin(e){
        e.preventDefault();

        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".login-form").style.display = 'flex';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".about").style.display = 'none';
    }

    showApply(e){
        e.preventDefault();

        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'flex';
        document.querySelector(".about").style.display = 'none';
    }

    showAbout(e){
        e.preventDefault();

        document.querySelector(".login-form").style.display = 'none';
        document.querySelector(".App-header").style.display = 'none';
        document.querySelector(".apply-form").style.display = 'none';
        document.querySelector(".about").style.display = 'flex';
    }

    getData = (e) => {
        e.preventDefault();
        
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;

        this.callapi(username, password)
    }

    callapi(username, password){
        const url = "https://reactbank-back-end.herokuapp.com/api/login/";

        fetch(url, {
            method: 'POST',
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
        .then(result => this.setState({msg : result.msg}))
        .then(console.log(this.state.msg))
    }

    render() {

        return (
            <div className="App">
                <div className="login-form">
                    <img src={nameLogo} alt='Logo'/>
                    
                    <form onSubmit={this.getData}>
                        <input ref={this.usernameInput} type="email" placeholder='e-mail' name="username" required/>
                        <input ref={this.passwordInput} type="password" placeholder='password' name="password" required/>

                        <div className="form-errors">
                            <ul>
                                <li>Incorrect username or password</li>
                                <li>Incorrect username or password</li>
                            </ul>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-primary">LOGIN</button>
                        </div>
                    </form>

                    <div className='login-form_footer'>
                        <a href="/" onClick={this.showApply}>APPLY</a>
                        <a href="/" onClick={this.showAbout}>ABOUT</a>
                    </div>
                </div>

                <Apply
                    showLogin = {this.showLogin}
                    showAbout = {this.showAbout}
                />

                <About
                    showLogin = {this.showLogin}
                    showApply = {this.showApply}
                />

                <header className="App-header">
                    <img src={nameLogo} alt='Logo'/>
                    <h3>welcome back.</h3>
                    
                    <button onClick={this.showLogin} type="button" className="btn btn-primary">Login</button>
                </header>

                <div className='screen-alert'>
                    <img src={nameLogo} alt='Logo'/>
                    <h3>will be available soon on Desktop.</h3>          
                </div>
            </div>
            );
        }
}

export default Home;