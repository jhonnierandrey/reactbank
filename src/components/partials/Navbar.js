import React from 'react';

import nameLogo from '../../images/reactBank.png';

function Navbar() {

    function showAccount(e){
        e.preventDefault();
  
        document.querySelector(".home").style.display = 'none';
        document.querySelector(".account").style.display = 'initial';
    }

    function showHome(e){
        e.preventDefault();
  
        document.querySelector(".home").style.display = 'initial';
        document.querySelector(".account").style.display = 'none';
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
                <img src={nameLogo} width="150" className="d-inline-block align-top" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/" onClick={showHome}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/" onClick={showAccount}>Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/logout">Log out</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;