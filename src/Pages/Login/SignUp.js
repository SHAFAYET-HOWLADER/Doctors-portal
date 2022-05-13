import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const SignUp = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (googleUser || user || updateProfile) {
        navigate('/home');
    }
    let catchError;
    if (googleError || error || updateError) {
        catchError = <small className='text-red-600' >Error: {error?.message || googleLoading?.message || updateError?.message}</small>
    }
    if (googleLoading || loading || updating) {
        return <Loading />;
    }
    const onSubmit = async (data, event) => {
        event.target.reset();
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.displayName });
        alert('Updated profile');
    };
    return (
        <section id='login'>
            <div className='container mx-auto flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h3 className="text-center text-2xl font-bold">Sign Up </h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text"
                                    {...register("name", {
                                        require: {
                                            value: true,
                                            message: "Name is require"
                                        },
                                    })}
                                    placeholder="Your Name"
                                    class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt">{errors.name?.message}</span>}
                                </label>
                            </div>
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
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-400 ">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-400 ">{errors.email.message}</span>}
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
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-400 ">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-400 ">{errors.password.message}</span>}
                                </label>
                            </div>
                            <p> <Link to='/signUp'>Forgot Password ? </Link> </p>
                            {catchError}
                            <input type='submit' value='Sign Up' class="btn w-full" />
                        </form>
                        <p>Already have an account ? <Link className='text-green-500' to='/login'>Please login</Link></p>
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

export default SignUp;