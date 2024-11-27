import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className='mb-20'>
            <div className="hero bg-base-200 rounded-2xl py-8">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-center text-5xl font-bold">Login now!</h1>
                        <p className="text-center py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut. Lorem ip</p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">

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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="flex items-center gap-2 py-2 cursor-pointer">
                                    <input type="checkbox" className="checkbox checkbox-primary" />
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>

                            <div className="form-control mt-0">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <div>New to this website? <NavLink className='link link-hover text-blue-500' to="/register">Register</NavLink></div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;