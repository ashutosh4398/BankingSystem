import React from 'react';

const Withdraw = () => {
    return (
        <div className='money-transfer-block' style={{width: "60%"}}>
            <div className="card border-success my-5" >
                <div className="card-header bg-transparent border-success text-center">Withdraw Money (Manual)</div>
                    <div className="card-body text-primary">
                        <form>
                            <div className="mb-3 form-group">
                                <label htmlFor="name" className='text-left'>Enter Amount</label>
                                <input type="text" name="" id="name" className="form-control" />
                            </div>
                            <div className="mb-3 form-group">
                                <button className="d-block mx-auto btn btn-outline-danger">Withdraw</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer bg-transparent border-success text-center">
                        Please take a look at amount once before clicking on withdraw
                    </div>
                </div>
        </div>
    );
};

export default Withdraw;