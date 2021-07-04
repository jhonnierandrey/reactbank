import React, {Component} from 'react';

class Home extends Component {

    render() {
        return(
            <section className="home">
                <article className="available-balance">
                    <h1><span>{this.props.userData.balance}</span></h1>
                </article>
                <article className="actions">
                    <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#depositModal"><i className="fas fa-arrow-circle-down"></i> Deposit</button>
                    <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#withdrawalModal"><i className="fas fa-arrow-circle-up"></i> Withdrawal</button>
                    <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#transferModal"><i className="fas fa-arrow-circle-up"></i> Transfer</button>
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