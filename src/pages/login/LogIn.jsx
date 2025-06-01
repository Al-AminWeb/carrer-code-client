import React, {use} from 'react';
import AuthContext from "../../context/AuthContext/AuthContext.jsx";
import {useLocation, useNavigate} from "react-router";


const LogIn = () => {
    const {logInUser} = use(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const from=location.state || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        logInUser(email, password)
        .then(result=>{
            console.log(result);
            navigate(from)
        })
            .catch(err=>{
                console.log(err)
            })


    };

    return (

        <div
            className="hero bg-gradient-to-br from-primary via-accent to-secondary min-h-screen flex items-center justify-center p-4">

            <div
                className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl transform transition-all hover:scale-105 duration-300">
                <div className="card-body p-8 md:p-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-8">
                        Login Now! ✨
                    </h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base-content font-semibold">Email Address</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                className="input input-bordered input-primary w-full focus:ring-2 focus:ring-accent"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <label className="label">
                                <span className="label-text text-base-content font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                className="input input-bordered input-primary w-full focus:ring-2 focus:ring-accent"
                                placeholder="••••••••••••"
                                required
                            />
                            <label className="label mt-2">
                                <a href="#" className="label-text-alt link link-hover text-sm text-accent font-medium">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control mt-8">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block text-lg hover:btn-accent hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Secure Login
                            </button>
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-sm text-base-content">
                                New around here?{' '}
                                <a href="/register"
                                   className="link link-secondary font-bold hover:link-primary hover:underline">
                                    Create an Account
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;