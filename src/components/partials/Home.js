import React, {Component} from 'react';

class Home extends Component {

    componentDidMount(){
        
        // let the transactions be mapped first
        setTimeout(() => {
            let transType = document.querySelectorAll('.transType')
            let debit = '<i class="fas fa-arrow-circle-up"></i>'
            let credit = '<i class="fas fa-arrow-circle-down"></i>'

            for (let i = 0; i < transType.length; i++) {
                if (transType[i].innerText === 'Debit') {
                    transType[i].className += " debit"
                    transType[i].innerHTML = debit
                }else if (transType[i].innerText === 'Credit') {
                    transType[i].className += " credit"
                    transType[i].innerHTML = credit
                }
            }
        }, 2000)
    }

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
                <br />
                <article className="transactions">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.userTransactions.length <= 0 ? <tr><td colSpan="5">No transactions yet</td></tr> : this.props.userTransactions.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className='transType'>{row.type}</td>
                                    <td>{row.description}</td>
                                    <td>{row.amount}</td>
                                    <td>{row.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </section>
        )
    }
}

export default Home;