import React, { Component } from 'react';
import nameLogo from '../images/reactBank.png';

class Apply extends Component {

    render(){
        return(
            <div className="apply-form">
                <img src={nameLogo} alt='Logo'/>
                
                <form onSubmit={this.getData}>

                    <div>
                        <input className="half" ref="" type="text" placeholder='First name' name="first-name" required/>
                        <input className="half" ref="" type="text" placeholder='Last name' name="last-name" required/>
                    </div>
                    <input ref={this.usernameInput} type="email" placeholder='e-mail' name="username" required/>
                    <input ref={this.passwordInput} type="password" placeholder='password' name="password" required/>
                    <input ref="" type="date" placeholder='Birthday' name="birth" required/>

                    <div className="form-errors">
                        <ul>
                            <li>Incorrect username or password</li>
                            <li>Incorrect username or password</li>
                        </ul>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary">APPLY</button>
                    </div>
                </form>

                <div className='login-form_footer'>
                    <a href="/" onClick={this.props.showLogin}>LOGIN</a>
                    <a href="/" onClick={this.props.showAbout}>ABOUT</a>
                </div>
            </div>
        )
    }
}

export default Apply;