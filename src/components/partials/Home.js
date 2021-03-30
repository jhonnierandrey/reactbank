import React, {Component} from 'react';

class Home extends Component {

    render() {
        return(
            <section className="home">
                <article className="available-balance">
                    <h1>$<span>{this.props.accountData.available}</span></h1>
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
}

export default Home;