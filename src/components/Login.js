import React, { Component } from 'react';
import nameLogo from '../images/reactBank.png';

class Login extends Component {

    usernameInput = React.createRef();
    passwordInput = React.createRef();

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

    render(){
        return(
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
                    <a href="/" onClick={this.props.showApply}>APPLY</a>
                    <a href="/" onClick={this.props.showAbout}>ABOUT</a>
                </div>
            </div>
        )
    }
}

export default Login;