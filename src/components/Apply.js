import React, { Component } from 'react';
import nameLogo from '../images/reactBank.png';

class Apply extends Component {

    nameInput = React.createRef();
    lastNameInput = React.createRef();
    usernameInput = React.createRef();
    passwordInput = React.createRef();
    confirmationInput = React.createRef();

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    getData = (e) => {
        e.preventDefault();
        document.querySelector(".modal-container").style.display = 'flex';

        let errors = []

        const name = this.nameInput.current.value;
        const lastName = this.lastNameInput.current.value;
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;
        const confirmation = this.confirmationInput.current.value;

        // Front-end form validation before calling api.

        if (name.length < 2 || name.length > 10) {
            errors.push('Invalid name')
        }
        if (lastName.length < 2 || lastName.length > 10) {
            errors.push('Invalid last name')
        }
        if (!this.validateEmail(username)) {
            errors.push('Invalid email')
        }
        if (password !== confirmation) {
            errors.push('Passwords do not match')
        }

        if (errors.length >= 1) {
            // hide modal and print errors
            document.querySelector(".modal-container").style.display = 'none';
            document.querySelector('.apply-form-errors').style.display = 'initial';
            let formErrors = document.querySelector('.apply-form-errors').querySelector('ul');

            formErrors.innerHTML = '';
            
            errors.map((error) => {
                return formErrors.innerHTML += `<li>${error}</li>`;
            })
        }else{
            document.querySelector(".modal-container").style.display = 'none';
            this.props.createUserApi(name, lastName, username, password, confirmation)
        }

    }

    render(){
        return(
            <div className="apply-form">
                <img src={nameLogo} alt='Logo'/>

                <div className="form-errors apply-form-errors">
                    <ul>
                    </ul>
                </div>

                <form onSubmit={this.getData}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={this.nameInput} placeholder='First name' name="first-name" required />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" ref={this.lastNameInput} placeholder='Last name' name="last-name" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <input className="form-control" ref={this.usernameInput} type="email" placeholder='E-mail' name="username" required />
                    </div>
                    <div className="form-group">
                        <input className="form-control" ref={this.passwordInput} type="password" placeholder='Password' name="password" required />
                    </div>
                    <div className="form-group">
                        <input className="form-control" ref={this.confirmationInput} type="password" placeholder='Confirm password' name="confirmation" required />
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