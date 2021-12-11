import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import BasicPage from './pages/BasicPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseDashboard from './pages/BaseDashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<BasicPage/>} />
                <Route exact path="/dashboard/*" element={<BaseDashboard/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;