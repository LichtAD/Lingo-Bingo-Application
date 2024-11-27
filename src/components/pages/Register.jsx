import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
    }

    return (
        <div className='mb-20'>
            <div className="hero bg-base-200 rounded-2xl py-8">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-center text-5xl font-bold">Register now!</h1>
                        <p className="text-center py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut. Lorem ip</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <div>Already have an account? <NavLink className='link link-hover text-blue-500' to="/login">Login</NavLink></div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;