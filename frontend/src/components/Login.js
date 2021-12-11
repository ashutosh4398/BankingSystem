import React from 'react';
import "./Login.css";
import piggy from "../assets/savings_piggy.jpg";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-body'>
           <div className="col-6 left-login-column">
           </div>
           <div className="col-6 h-100 d-flex flex-column align-items-center justify-content-center p-3">
               <form style={{height: "100%"}}>
                    <div className="mb-3">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" className="form-control" />
                        <div className="form-text">Email address is required to identify your bank account</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" />
                        <div className="form-text">Password is required for security to maintain data privacy</div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-outline-primary px-5 mr-auto">Login</button>
                        <p style={{float:'right'}}><Link to="/signup">Signup here</Link></p>
                    </div>
               </form>
           </div>
        </div>
    );
};

export default Login;