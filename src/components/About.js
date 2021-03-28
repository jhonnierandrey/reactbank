import React, {Component} from 'react';
import nameLogo from '../images/reactBank.png';

class About extends Component {
    render(){
        return(
            <div className="about">
                <section>
                    <img src={nameLogo} alt='Logo'/>
                    <hr />
                    <p>Concept of a banking app for managing users.</p>
                    <p>Frontend made using ReactJS</p>
                    <p>Backend made using NodeJS, visit API <a href="https://reactbank-back-end.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a></p>
                </section>
    
                <div className='login-form_footer'>
                    <a href="/">HOME</a>
                    <a href="/" onClick={this.props.showLogin}>LOGIN</a>
                    <a href="/" onClick={this.props.showApply}>APPLY</a>
    
                    <ul className="footer-copyright">
                        <li>&copy; 2021 <a href="https://www.jaesmadeit.com/" target="_blank" rel="noopener noreferrer">JAES Made It</a></li>
                        <li>Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> + <a href="https://github.com/jhonnierandrey/reactbank" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About;