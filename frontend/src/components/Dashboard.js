import React from 'react';
import Balance from './Balance';
import BChart from './BChart';
import PChart from './PChart';
import "./Card.css";
import LineChart from './LineChart';

const Dashboard = () => {
    return (
        <div>
            <div className="" style={{width: "100%"}}>
                <div className='dashboard-charts'>
                    <div className="col mx-3">
                        <Balance />
                    </div>
                    <div className="col mx-3">
                        <PChart/>
                    </div>
                    <div className="col mx-3">
                        <BChart/>
                    </div>
                </div>
                <div className="line-chart-handler">
                    <LineChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;