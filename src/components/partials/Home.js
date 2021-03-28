import React from 'react';

function Home() {
    return(
        <section className="home">
            <article className="available-balance">
                <h1>$1,588.66</h1>
            </article>
            <article className="actions">
                <button type="button" className="btn btn-outline-success"><i className="fas fa-arrow-circle-down"></i> Deposit</button>
                <button type="button" className="btn btn-outline-danger"><i className="fas fa-arrow-circle-up"></i> Withdrawal</button>
            </article>
            <hr />
            <article className="transactions">
                <ul>
                    <li>No recent transactions.</li>
                </ul>
            </article>
        </section>
    )
}

export default Home;