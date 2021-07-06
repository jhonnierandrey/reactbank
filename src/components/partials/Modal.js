import React, {Component} from 'react';

class Modal extends Component {
    render() {
        return(
            <div>
                {/* Deposit/Reset Balance Modal */}
                <div className="modal fade modal-dashboard" id="depositModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Reset balance</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h1>$1,000.00</h1>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-success"><i className="fas fa-arrow-circle-down"></i> Deposit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Withdrawal Modal */}
                <div className="modal fade modal-dashboard" id="withdrawalModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Withdrawal Money</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input type="number" autoComplete="off" className="form-control" id="withdrawal" aria-describedby="emailHelp" name='withdrawal-amount' placeholder={this.props.userData.balance} required/>
                                        <small id="emailHelp" className="form-text text-muted">Enter the amount you wish to withdrawal.</small>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-msg wdw-msg">

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                                <button onClick={this.props.withdrawal} type="submit" className="btn btn-outline-danger"><i className="fas fa-arrow-circle-up"></i> Withdrawal</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Transfer Modal */}
                <div className="modal fade modal-dashboard" id="transferModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Transfer Money</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="/dashboard">
                                    <div className="form-group">
                                        <input type="email" autoComplete="off" className="form-control" id="transfer-email" aria-describedby="emailHelp" placeholder="E-mail" required/>
                                        <small id="emailHelp" className="form-text text-muted">Enter the email account.</small>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" autoComplete="off" className="form-control" id="withdrawal" aria-describedby="emailHelp" placeholder={this.props.userData.balance} required/>
                                        <small id="emailHelp" className="form-text text-muted">Enter the amount you wish to transfer.</small>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-info"><i className="fas fa-arrow-circle-up"></i> Transfer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;