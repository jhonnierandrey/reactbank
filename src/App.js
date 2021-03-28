import React, { Component } from 'react';

import './App.css';
import nameLogo from './images/reactBank.png';

import { Apply, About, Dashboard, Login, Modal} from "./components/index";

class App extends Component {

    state = {
        msg: "",
        userData: []
    }
    
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

    showModal(e){
        e.preventDefault();

        document.querySelector(".modal-container").style.display = 'flex';
        // document.querySelector(".login-form").style.display = 'none';
    }

    showDashboard(e){
      e.preventDefault();

      document.querySelector(".login-form").style.display = 'none';
      document.querySelector(".App-header").style.display = 'none';
      document.querySelector(".apply-form").style.display = 'none';
      document.querySelector(".about").style.display = 'none';
      document.querySelector(".dashboard-container").style.display = 'initial';
    }

    render() {

        return (
            <div className="App">
                <Login
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