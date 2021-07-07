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
                                <h5 className="modal-title" id="exampleModalLabel">Deposit Money</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h1>+$1,000.00</h1>
                            </div>
                            <div className="modal-msg dpst-msg">

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                                <button onClick={this.props.depositMoney} type="button" className="btn btn-outline-success"><i className="fas fa-arrow-circle-down"></i> Deposit</button>
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
                                <form onSubmit={this.props.transfer} id="transfer-form">
                                    <div className="form-group">
                                        <input type="email" autoComplete="off" className="form-control" id="transfer-email" name="transfer-email" aria-describedby="emailHelp" placeholder="E-mail" required/>
                                        <small id="emailHelp" className="form-text text-muted">Enter the email account.</small>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" autoComplete="off" className="form-control" id="transfer-amount" name="transfer-amount" aria-describedby="emailHelp" placeholder={this.props.userData.balance} required/>
                                        <small id="emailHelp" className="form-text text-muted">Enter the amount you wish to transfer.</small>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-msg trsf-msg">

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                                <button type="submit" form='transfer-form' className="btn btn-outline-info"><i className="fas fa-arrow-circle-up"></i> Transfer</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Change Password Modal */}
                <div className="modal fade modal-dashboard" id="accountUpdate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Change password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.props.accountUpdate} id="account-update">
                                    <div className="form-group">
                                        <input type="password" autoComplete="off" className="form-control" id="password" name="password" aria-describedby="emailHelp" placeholder="Current password" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" autoComplete="off" className="form-control" id="password-new" name="password-new" aria-describedby="emailHelp" placeholder="New password" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" autoComplete="off" className="form-control" id="confirmation" name="confirmation" aria-describedby="emailHelp" placeholder="Confirm new password" required/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-msg usrup-msg">

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                                <button type="submit" form='account-update' className="btn btn-outline-success"><i className="fas fa-user-edit"></i> Change password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;