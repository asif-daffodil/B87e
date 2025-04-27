"use client";
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/mark.svg';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    return (
        <div className="max-w-4xl max-sm:max-w-lg mx-auto font-[sans-serif] p-6">
            <div className="text-center mb-12 sm:mb-16">
                <a href="javascript:void(0)"><Image
                    src={logo} alt="logo" className='w-48 inline-block' />
                </a>
                <h4 className="text-gray-600 text-base mt-6">Sign up into your account</h4>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">First Name</label>
                        <input {...register('name', {
                            required: 'First name is required',
                        })} type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Last Name</label>
                        <input {...register('lname', {
                            required: 'Last name is required',
                        })} type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
                        {errors.lname && <span className="text-red-500 text-sm">{errors.lname.message}</span>}
                    </div>
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Email Id</label>
                        <input {...register('email', {
                            required: 'Email is required',
                            email: 'Please enter valid email'
                        })} type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Mobile No.</label>
                        <input {...register('number', {
                            required: 'Mobile number is required',
                            minLength: {
                                value: 10,
                                message: 'Mobile number must be 10 digit'
                            }
                        })} type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
                        {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}
                    </div>
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Password</label>
                        <input {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be 6 character long'
                            }
                        })} type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                    <div>
                        <label className="text-gray-600 text-sm mb-2 block">Confirm Password</label>
                        <input {...register('cpassword', {
                            required: 'Confirm password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be 6 character long'
                            },
                            confirmPassword: {
                                value: 'password',
                                message: 'Password and confirm password must be same'
                            }
                        })} type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
                        {errors.cpassword && <span className="text-red-500 text-sm">{errors.cpassword.message}</span>}
                    </div>
                </div>

                <div className="mt-8">
                    <button type="submit" className="mx-auto block py-3 px-6 text-sm tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;