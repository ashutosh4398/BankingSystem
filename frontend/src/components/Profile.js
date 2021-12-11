import React from 'react';
import unknown_user from "../assets/unknown_user.jpg";
import { AiTwotoneCamera } from "react-icons/ai";
import "./Profile.css";

const Profile = () => {
    return (
        <div className='profile-block py-5 my-5'>
            <form className='my-5'>
                <div className="row">
                    <div className="col-12 text-center my-3">
                        <div className="">
                            <img src={unknown_user} className='profile-pic img img-fluid bg-dark img-thumbnail' />
                        </div>
                        <label htmlFor="profile_pic" className='profile-pic-change'><AiTwotoneCamera /></label>
                        <input type="file" name="" id="profile_pic" style={{display:"none"}} />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="" id="name" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="name">Date of Birth</label>
                        <input type="text" name="" id="name" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="email">Phone Number</label>
                        <input type="email" name="" id="email" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="email">PAN Card</label>
                        <input type="email" name="" id="email" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="email">Aadhar Card</label>
                        <input type="email" name="" id="email" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="email">Birth Certificate</label>
                        <input type="email" name="" id="email" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="email">Electricity Bill</label>
                        <input type="email" name="" id="email" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-6">
                        <label htmlFor="email">Signature</label>
                        <input type="email" name="" id="email" className="form-control" />
                    </div>
                    <div className="form-group mb-3 col-12">
                        <button className="btn btn-outline-primary" style={{float: 'right'}}>Update information</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Profile;