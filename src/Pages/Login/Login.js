import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';
const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(googleUser || user)
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    let catchError;
    if (googleError || error) {
        catchError = <small className='text-red-600' >Error: {error?.message || googleLoading?.message}</small>
    }
    if (googleLoading || loading) {
        return <Loading />;
    }
    const onSubmit = (data, event) => {
        signInWithEmailAndPassword(data.email, data.password || "");
        event.target.reset();
    };
    return (
        <section id='login'>
            <div className='container mx-auto flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h3 className="text-center text-2xl font-bold">Login </h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    {...register("email", {
                                        require: {
                                            value: true,
                                            message: "Email is require"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Please provide a valid email'
                                        }
                                    })}
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-al">{errors.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register("password", {
                                        require: {
                                            value: true,
                                            message: "Password is require"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'password must be 6 or longer'
                                        }
                                    })}
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt">{errors.password?.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt">{errors.password?.message}</span>}
                                </label>
                            </div>
                            {catchError}
                            <input type='submit' value='Login' className="btn w-full" />
                        </form>
                        <p>New to doctors portal ? <Link className='text-green-500' to='/signUp'>  Create new account</Link></p>
                        <div className="divider">OR</div>
                        <div className="card-actions justify-center">
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-wide">
                                continue wth google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
