import React from 'react';
import "./Card.css";

const Balance = () => {
    return (
        <div className="card py-5 d-flex justify-content-center align-items-center" style={{width: "18rem", height: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Current Balance</h5>
                <h2>Rs. 10000</h2>
            </div>
        </div>
    );
};

export default Balance;