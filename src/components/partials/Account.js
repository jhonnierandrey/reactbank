import React from 'react';

function Account() {
    return(
        <section className="account">
            <article className="account-information">
                <h1>Jen Smith</h1>
                <h5>jen@smith.com</h5>
                <h5>$1,588.66</h5>
            </article>
            <article className="actions">
                <button type="button" className="btn btn-outline-success"><i className="fas fa-user-edit"></i> Update</button>
                <button type="button" className="btn btn-outline-danger"><i className="fas fa-sign-out-alt"></i> Log out</button>
            </article>
            <hr />
            <article className="account-information-update">
                <p>First name: <span>Jen</span></p>
                <p>Last name: <span>Smith</span></p>
                <p>e-mail: <span>jen@smith.com</span></p>
            </article>
        </section>
    )
}

export default Account;