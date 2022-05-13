import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (googleUser || user) {
        navigate('/home');
    }
    let catchError;
    if (googleError || error) {
        catchError = <small className='text-red-600' >Error: {error?.message || googleLoading?.message}</small>
    }
    if (googleLoading || loading) {
        return <Loading />;
    }
    const onSubmit = (data, event) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
        event.target.reset();
    };
    return (
        <section id='login'>
            <div className='container mx-auto flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h3 className="text-center text-2xl font-bold">Login </h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Email</span>
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
                                    class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-al">{errors.email?.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt">{errors.email?.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Password</span>
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
                                    class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt">{errors.password?.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt">{errors.password?.message}</span>}
                                </label>
                            </div>
                            {catchError}
                            <input type='submit' value='Login' class="btn w-full" />
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
