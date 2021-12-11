import React,{useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';

const BasicPage = () => {

    useEffect(() => {
        console.log("Page loaded");
    },[])

    return (
        <div className='container-fluid'>
            {/* <h3 className='text-center mt-5'>TJSB Savings Bank</h3> */}
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
};

export default BasicPage;