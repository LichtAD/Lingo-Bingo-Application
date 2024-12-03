import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { createNewUser, user, setUser, updateMyProfile } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        if (name.length < 5) {
            setError('Name must be at least 5 characters long');
            toast.error(error, {
                position: "top-right",
                autoClose: 2000
            })
            return;
        }

        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        // const password = "Passw1";
        const isValid = regex.test(password);
        // console.log(isValid); // true if valid, false otherwise

        if (!isValid) {
            setError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            toast.error(error, {
                position: "top-right",
                autoClose: 2000
            })
            return;
        }

        // console.log({ name, photo, email, password });

        setError('');

        createNewUser(email, password)
            .then(result => {
                setUser(result.user);
                // console.log(result.user);
                updateMyProfile({ displayName: name, photoURL: photo });
                navigate('/');
            })
            .catch(err => {
                const errorMessage = err.message;
                // console.log({ errorMessage });
                setError(errorMessage);
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000
                })
            })
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

                            <div>
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
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