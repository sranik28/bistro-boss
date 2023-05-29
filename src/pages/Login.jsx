import React, { useState } from 'react';
import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import loginImg from '../assets/others/authentication1.png'
import fbImg from '../assets/login/Group 162fb.png'
import googleImg from '../assets/login/Group 156google.png'
import githubImg from '../assets/login/Group 158github.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <main className='container grid md:grid-cols-2 px-3 mt-10 shadow-[0px 5px 10px 0px]'>
            <img className=' ' src={loginImg} alt="" />
            <div className='max-w-[1240px] w-full mx-auto mt-10  '>
                <h1 className='text-center text-[40px] font-bold text-[#151515]'>Login</h1>
                <div className=' text-center py-5 bg-slate-200 rounded md:w-[500px] mx-auto my-5'>
                    <form onSubmit={handleLogin}>
                        <input className='w-[80%] py-2 my-5 rounded outline-none px-4 ' type="email" name="email" placeholder='    enter your email' required />

                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} name="password" id="password" className='border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base ' autoComplete='off' placeholder='   enter your password' />
                            <span className='absolute md:top-3 md:right-14 top-3 right-11'>
                                {
                                    showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                                }
                            </span>
                        </div>
                        
                    

                        <button className='w-[80%]  bg-[#e4b165d4]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center'>Login <span><CiLogin className='w-8 h-8 ' /></span> </button>

                        <p className='text-red-600 text-lg'>{error}</p>

                        <p className='mt-5 text-[#D1A054]'> New here? Create a New Account<Link to="/register" className=' underline'> Registration</Link></p>
                    </form>
                </div>
                <p className='text-center text-[#444444] mb-2'>Or sign in with</p>
                <div className='flex justify-center gap-[30px] my-5'>
                    <button>
                        <span>
                            <img src={fbImg} alt="" />
                        </span>
                    </button>
                    <button>
                        <span>
                            <img src={googleImg} alt="" />
                        </span>
                    </button>
                    <button>
                        <span>
                            <img src={githubImg} alt="" />
                        </span>
                    </button>
                </div>
                {/* <button  className='p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10  '><FcGoogle className='text-[32px]' /><span>Continue with Google</span></button> */}
            </div>
        </main>
    );
};

export default Login;