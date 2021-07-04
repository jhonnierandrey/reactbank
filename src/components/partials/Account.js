import React, {Component} from 'react';

class Account extends Component {

    render() {
        return(
            <section className="account">
                <article className="account-information">
                    <h1><span>{this.props.userData.name}</span> <span>{this.props.userData.lastName}</span></h1>
                    <h5><span>{this.props.userData.email}</span></h5>
                    <h5><span>{this.props.userData.balance}</span></h5>
                </article>
                <article className="actions">
                    <button type="button" className="btn btn-outline-success"><i className="fas fa-user-edit"></i> Update</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => { window.location.href = '/logout'} }><i className="fas fa-sign-out-alt"></i> Log out</button>
                </article>
                <hr />
            </section>
        )
    }
}

export default Account;