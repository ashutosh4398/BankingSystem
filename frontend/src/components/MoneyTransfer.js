import React from 'react';

const MoneyTransfer = () => {
    return (
        <div className='money-transfer-block' style={{width: "60%"}}>
            <div className="card border-success my-5" >
                <div className="card-header bg-transparent border-success text-center">Transfer Money</div>
                    <div className="card-body text-primary">
                        <form>
                            <div className="mb-3 form-group">
                                <label htmlFor="name" className='text-left'>Name of Person</label>
                                <input type="text" name="" id="name" className="form-control" />
                            </div>
                            <div className="mb-3 form-group">
                                <label htmlFor="name" className='text-left'>Account Number</label>
                                <input type="text" name="" id="name" className="form-control" />
                            </div>
                            <div className="mb-3 form-group">
                                <label htmlFor="name" className='text-left'>IFSC Code</label>
                                <input type="text" name="" id="name" className="form-control" />
                            </div>
                            <div className="mb-3 form-group">
                                <label htmlFor="name" className='text-left'>Amount</label>
                                <input type="text" name="" id="name" className="form-control" />
                            </div>
                            <div className="mb-3 form-group">
                                <button className="d-block mx-auto btn btn-outline-danger">Transfer</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer bg-transparent border-success text-center">
                        Please enter all bank details carefully
                    </div>
                </div>
        </div>
    );
};

export default MoneyTransfer;