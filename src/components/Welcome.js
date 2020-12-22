import React, { Component } from 'react';
import nameLogo from '../images/reactBank.png';

class Welcome extends Component {
    
    showLogin(){
        document.querySelector(".login-form").style.display = 'flex';
        document.querySelector(".App-header").style.display = 'none';
    }

    render() {

        return (
            <div className="App">
                <div className="login-form">
                    <img src={nameLogo} alt='Logo'/>
                    
                    <form>
                        <input type="text" placeholder='username'/>
                        <input type="password" placeholder='password'/>

                        <div>
                            <button type="submit" className="btn btn-primary">LOGIN</button>
                        </div>
                    </form>

                    <div className='login-form_footer'>
                        <a href="/">APPLY</a>
                        <a href="/">ABOUT</a>
                    </div>
                </div>

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

export default Welcome;