import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div className='login-body row'>
           <div className="col-6 left-login-column">
           </div>
           <div className="col-6 h-100 d-flex flex-column align-items-center justify-content-center p-3">
               <form>
                    <div className="mb-3">
                        <label htmlFor="email">Name</label>
                        <input type="text" id="email" className="form-control" />
                        <div className="form-text">Email address is required to identify your bank account</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" className="form-control" />
                        <div className="form-text">Email address is required to identify your bank account</div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-6 form-group g-0">
                                <label htmlFor="email">Email Address</label>
                                <input type="text" id="email" className="form-control" />        
                            </div>
                            <div className="col-6 mr-0">
                                <label htmlFor="email">Email Address</label>
                                <input type="text" id="email" className="form-control" />        
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" />
                        <div className="form-text">Password is required for security to maintain data privacy</div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-outline-success px-4 mr-auto">Sign up</button>
                        <p style={{float:'right'}}><Link to="/">Login here</Link></p>
                    </div>
               </form>
           </div>
        </div>
    );
};

export default Signup;