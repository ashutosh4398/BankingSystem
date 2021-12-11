import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Deposit from '../components/Deposit';
import Header from '../components/Header';
import MoneyTransfer from '../components/MoneyTransfer';
import Profile from '../components/Profile';
import Transactions from '../components/Transactions';
import Withdraw from '../components/Withdraw';
import "./BaseDashboard.css"

const BaseDashboard = () => {
    return (
        <div>
            <Header />
            <div className="container base-container">
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/transaction" element={<Transactions />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/transfer" element={<MoneyTransfer />} />
                    <Route exact path="/withdraw" element={<Withdraw />} />
                    <Route exact path="/deposit" element={<Deposit />} />
                </Routes>
            </div>
        </div>
    );
};

export default BaseDashboard;