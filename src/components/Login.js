import React, { Component } from 'react';
import nameLogo from '../images/reactBank.png';

class Login extends Component {

    usernameInput = React.createRef();
    passwordInput = React.createRef();

    getData = (e) => {
        e.preventDefault();
        
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;

        this.props.callapi(username, password)
    }

    render(){
        return(
            <div className="login-form">
                <img src={nameLogo} alt='Logo'/>

                <form onSubmit={this.getData}>
                    <div className="form-group">
                        <input className="form-control" ref={this.usernameInput} type="email" placeholder='E-mail' name="username" required />
                    </div>
                    <div className="form-group">
                        <input className="form-control" ref={this.passwordInput} type="password" placeholder='Password' name="password" required />
                    </div>
                    
                    <div className="form-errors">
                        <ul>
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