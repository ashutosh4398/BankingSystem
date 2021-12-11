import React from 'react';

const Deposit = () => {
    return (
        <div className='money-transfer-block' style={{width: "60%"}}>
            <div className="card border-success my-5" >
                <div className="card-header bg-transparent border-success text-center">Deposit Money</div>
                    <div className="card-body text-primary">
                        <form>
                            <div className="mb-3 form-group">
                                <label htmlFor="name" className='text-left'>Enter Amount</label>
                                <input type="text" name="" id="name" className="form-control" />
                            </div>
                            <div className="mb-3 form-group">
                                <button className="d-block mx-auto btn btn-outline-success">Deposit (Manual)</button>
                            </div>
                        </form>
                        <h2 className='text-center'>OR</h2>
                        <button className="d-block mx-auto btn btn-outline-success mt-3">Online Transfer via Razorpay (recommended)</button>
                    </div>
                    <div className="card-footer bg-transparent border-success text-center">
                        It is recommended that you do online transaction via Razorpay.
                    </div>
                </div>
        </div>
    );
};

export default Deposit;